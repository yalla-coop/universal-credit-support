import { Readable } from 'stream';

import { getClient } from '../../../database';

import { getOrganisationCSV as getOrganisationCSVUseCase } from '../use-cases';

const getOrganisationCSV = async (req, res, next) => {
  let client;
  try {
    const { role } = req.user;
    client = await getClient();

    let startId;

    const {
      rows: [{ max }],
    } = await client.query(`SELECT max(id) FROM users WHERE status = 'ACTIVE'`);
    const endId = max;

    const limit = 200;
    const pipes = [];

    for (let i = (startId || 1) - 1; i <= endId; i += limit) {
      const start = i;
      const end = i + limit > endId ? endId : i + limit;
      const organisationsStream = {
        start,
        end,
        role,
        client,
        header: i + limit >= endId,
      };

      pipes.push(organisationsStream);
    }

    res.setHeader(
      'Content-disposition',
      `attachment; filename=organisations.csv`,
    );
    res.set('Content-Type', 'text/csv');

    const rec = async (_pipes) => {
      const stream = await getOrganisationCSVUseCase(_pipes[_pipes.length - 1]);

      if (_pipes.length === 1) {
        stream.pipe(res, { end: true });
        // stream.pipe(process.stdout);
        stream.on('finish', async () => {
          client.release();
        });
        return;
      }

      stream.pipe(res, { end: false });
      // stream.pipe(process.stdout);

      stream.on('finish', async () => {
        const newLine = new Readable({});
        newLine.push('\n');
        newLine.push(null);
        newLine.pipe(res, { end: false });

        _pipes.pop();
        await rec(_pipes);
      });
    };

    if (pipes.length) {
      await rec(pipes);
    } else {
      throw new Error('stream error');
    }
  } catch (error) {
    if (client) {
      client.release();
    }
    next(error);
  }
};

export default getOrganisationCSV;
