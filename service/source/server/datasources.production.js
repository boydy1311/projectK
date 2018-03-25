import MongoUtil from './utils/mongoUtil';
const mongoUtil = new MongoUtil();
const dbConfig = mongoUtil.getConfig();
module.exports = {
  db: {
    dbConfig
  }
}
