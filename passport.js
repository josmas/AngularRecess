'use strict';

exports = module.exports = function(app, passport) {
  var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('./models/user.js');

  passport.serializeUser(function(user, done) {
    console.log('User serialize');
    done(null, user.email);
  });

  passport.deserializeUser(function(email, done) {
    console.log('User deserialize');
    User.findOne({email: email}, function (err, user) {
      done(err, user);
    });
  });

  // Setup passport local config (username and password)
  passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password'
    },
    function(username, password, done) {
      User.login(username, password, function(err, user) {
        return done(null, user);
      });
    })
  );
}
