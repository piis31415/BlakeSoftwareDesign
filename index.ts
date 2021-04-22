import * as express from 'express';
import config from 'config';

const app = express();
// Change to config?
const port = 3000;

app.use('/',express.static('dist'));

// app.post('/login', passport.authenticate('', { successRedirect: '/',
//                                                     failureRedirect: '/login' }));


app.listen(port);
console.log(`App listening on port ${port}`);
