import config from './index';

describe('validate config', () => {
  it('should return the required env variables', () => {
    expect(config).toHaveProperty('common');
    expect(config).toHaveProperty('server');
  });

  it('common config', () => {
    expect(config.common).toHaveProperty('env');
  });

  it('server config', () => {
    expect(config.server).toHaveProperty('port');
    expect(config.server).toHaveProperty('secret');
  });

  // it('database config', () => {
  //   expect(config.database).to.have.property('url');
  // });
});
