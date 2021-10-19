export default class GameSaving {
  constructor(info) {
    const data = JSON.parse(info);
    this.id = data.id;
    this.created = data.created;
    this.userInfo = data.userInfo;
  }
}
