/// <reference path="bundle.d.ts" />

import FacebookStrategy = require('passport-facebook');

new FacebookStrategy({
    clientID: 'abc',
    clientSecret: '123',
    callbackURL: 'http://127.0.0.1:3000/auth/facebook/callback'
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, {});
  }
);
