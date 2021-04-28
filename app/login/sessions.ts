// this will use cookies to function
import * as session from "express-session";
import * as MongoStore from 'connect-mongo';
import * as config from 'config';

const MONGOURI: string = config.get('mongo.uri');

const thing = session({
  secret: 'foo',
  store: MongoStore.create({
    mongoUrl: MONGOURI
  })
});

export {
  thing
}
