const mongoose = require('mongoose');

const user             = '';
const psw              = '';
const host             = 'db_mongo_ze';
const port             = '27017';
const db               = 'ZeDB';

module.exports = {
  getUri()
  {
    const login = (user && psw)?`${user}:${psw}@`:'';
    return `mongodb://${login}${host}:${port}/${db}`
  },
  createConnection()
  {
    mongoose.connect(this.getUri(), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
  },
  async initializeDatabases()
  {
    this.createConnection();
    //TBD
  }
}
