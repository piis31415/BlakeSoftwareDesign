// Google Oauth Stuff
const express = require('express');
const router = express.Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const config = require('config');
const GOOGLE_CLIENT_ID = config.get('googleOauth.clientId');
const GOOGLE_CLIENT_SECRET = config.get('googleOauth.clientSecret');

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });
  }
));

modules.exports = {
  passport: passport
}