import { Pool } from 'pg';
import fs from 'fs';
import Debug from 'debug';
import config from '../config';
import { toCamelcase, toParentChild, sanitizeCSVInjection } from './utils';

const debug = Debug('server');

const connectionString = config.database.url;
const { env } = config.common;
const isInsertOrUpdateRegex = new RegExp(/(UPDATE(.|\n)*SET)|(INSERT INTO)/i);

// if you want to connect to heroku database you need to add:
// ssl: { rejectUnauthorized: false }
// to the below object
let __pool;
if (env === 'production') {
  __pool = new Pool({ connectionString, ssl: { rejectUnauthorized: false } });
} else {
  __pool = new Pool({ connectionString });
}

const pool = __pool;

// Do not use pool.query if you need transactional integrity
// check out a client from the pool to run several queries in a row in a transaction
// You must call the releaseCallback or client.release
// (which points to the releaseCallback) when you are finished with a client.
const getClient = async () => {
  const client = await pool.connect();
  const { query, release } = client;

  // monkey patch the query method to keep track of the last query executed
  const _query = (...args) => {
    client.lastQuery = args;
    return query.apply(client, args);
  };

  client.query = async (text, _params) => {
    let params = _params;
    const isInsertOrUpdate = isInsertOrUpdateRegex.test(text);

    if (isInsertOrUpdate) {
      params = sanitizeCSVInjection(_params);
    }

    const res = await _query(text, params);
    if (res && res.rows) {
      const rows = toCamelcase(res.rows);
      res.rows = rows;
    }
    return res;
  };

  // set a timeout of 5 seconds, after which we will log this client's last query
  const timeout = setTimeout(() => {
    debug('A client has been checked out for more than 5 seconds!');
    debug(`The last executed query on this client was: ${client.lastQuery}`);
  }, 5000);

  const done = (err2) => {
    // call the actual 'done' method, returning this client to the pool
    release(err2);
    // clear our timeout
    clearTimeout(timeout);
    // set the query method back to its old un-monkey-patched version
    client.query = query;
  };

  // set the release method back to its old un-monkey-patched version
  client.release = done;
  return client;
};

const query = async (text, _params, client) => {
  let _pool = pool;
  if (client) {
    _pool = client;
  }

  let params = _params;
  const isInsertOrUpdate = isInsertOrUpdateRegex.test(text);

  if (isInsertOrUpdate) {
    params = sanitizeCSVInjection(_params);
  }

  const res = await _pool.query(text, params);

  if (res && res.rows) {
    const rows = toCamelcase(toParentChild(res.rows));
    res.rows = rows;
  }
  return res;
};

const readSqlFile = async (filePath) => {
  const sql = fs.readFileSync(filePath).toString();
  const client = await getClient();
  await client.query(sql);
  await client.release();
  debug(`done: ${filePath.split('/').slice(-1)}`);
};

export { query, getClient, readSqlFile, pool };
