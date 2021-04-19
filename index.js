const express = require('express');
const app = express();
const config = require('config');
// Change to config?
const port = 3000;

app.use('/',express.static('dist'));

// app.post('/login', passport.authenticate('', { successRedirect: '/',
//                                                     failureRedirect: '/login' }));


app.listen(port);
console.log(`App listening on port ${port}`);
