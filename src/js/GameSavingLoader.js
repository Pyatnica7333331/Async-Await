import GameSaving from './GameSaving';
import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    try {
      const objectRead = await read();
      const result = await json(objectRead);
      return new GameSaving(JSON.parse(result));
    } catch (error) {
      throw new Error(error);
    }
  }
}
