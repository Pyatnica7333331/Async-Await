import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then((saving) => saving, (error) => {
  throw new Error(error);
});
(async () => {
  try {
    return await GameSavingLoader.load();
  } catch (error) {
    throw new Error(error);
  }
})();
