import build from './build';

(async () => {
  try {
    await build();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    process.exit(0);
  }
})();
