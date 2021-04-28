import * as express from 'express';
import * as config from 'config';
import { OAuthRoute } from './app/login/oauth';

const app = express();
const port = config.get('port');

app.use('/', express.static('dist'));

app.use('/', OAuthRoute);


app.listen(port);
console.log(`App listening on port ${port}`);
