export default class MongoUtil {
  config = {};
  constructor() {
    this.config.name = 'ProjectK';
    this.config.connector = 'mongodb';
  }

  getConfig() {
    return this.config;
  }
}
