import GameSaving from './GameSaving';
import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    try {
      const objectRead = await read();
      const result = await json(objectRead);
      const { id, created, userInfo } = JSON.parse(result);
      return new GameSaving(
        id, created, userInfo.id, userInfo.name, userInfo.level, userInfo.points,
      );
    } catch (error) {
      throw new Error(error);
    }
  }
}
