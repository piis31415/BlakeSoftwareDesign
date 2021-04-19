const { MongoClient } = require('mongodb');
const config = require('config');
const MONGO_URI = config.get('')

const client = new MongoClient(
  MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

const db = client.db("Learning-Works");
const Users = db.createCollection('Users');

module.exports = {
  db,
  Users
}