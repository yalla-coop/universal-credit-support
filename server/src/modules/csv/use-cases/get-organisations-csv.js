import { Transform } from 'json2csv';
import * as CSV from '../model';

import * as u from '../utils';

const getOrganisationCSV = async ({ client, start, end, header }) => {
  const opts = {};
  const transformOpts = { objectMode: true };

  opts.fields = u.organisations;
  opts.header = header;
  const stream = await CSV.findOrganisations({ client, start, end });
  return stream.pipe(new Transform(opts, transformOpts));
};

export default getOrganisationCSV;
