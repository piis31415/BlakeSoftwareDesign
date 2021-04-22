import * as mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/users', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Successfully connected to mongodb!');
});

export { mongoose };