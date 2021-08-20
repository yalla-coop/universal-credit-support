import build from './build';

(async () => {
  try {
    await build();
  } catch (error) {
    console.error(error);
  } finally {
    process.exit(0);
  }
})();
