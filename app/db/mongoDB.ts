import * as mongoose from 'mongoose';
import * as config from 'config';

const DBPORT = config.get('mongo.port');

mongoose.connect('mongodb://localhost/LearningWorks', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Successfully connected to mongodb!');
});

export { mongoose };