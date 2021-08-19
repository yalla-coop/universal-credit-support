import { expect } from 'chai';
import config from './index';

describe('validate config', () => {
  it('should return the required env variables', () => {
    expect(config).to.have.property('common');
    expect(config).to.have.property('server');
  });

  it('common config', () => {
    expect(config.common).to.have.property('env');
  });

  it('server config', () => {
    expect(config.server).to.have.property('port');
    expect(config.server).to.have.property('secret');
  });

  // it('database config', () => {
  //   expect(config.database).to.have.property('url');
  // });
});
