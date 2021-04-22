// Google Oauth Stuff
import express from 'express';
import passport from 'passport';
import config from 'config';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';

const router = express.Router();
const GOOGLE_CLIENT_ID: String = config.get('googleOauth.clientId');
const GOOGLE_CLIENT_SECRET: String = config.get('googleOauth.clientSecret');

// https://github.com/moribvndvs/passport-examples/blob/master/example-simple/passport.js
// setup express sessions
passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/callback",
  passReqToCallback: true
},
  async (request, accessToken, refreshToken, profile, done) => {
    // const user;
    // if (user.) {

    // }
    // Users.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });
  }
));

module.exports = {
  passport: passport
}