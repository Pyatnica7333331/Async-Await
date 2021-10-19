import GameSaving from './GameSaving';
import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    try {
      const result = await json(await read());
      return new GameSaving(JSON.parse(result));
    } catch (error) {
      throw new Error(error);
    }
  }
}
