var db = require("../models");
var passport = require("passport")
  , LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    db.User.findOne({ where: {username: username} }).then(function(user) {
      if (!user) {
        console.log("Incorrect Username");
        return done(null, false, { message: "Incorrect username." });
      }
      if (!user.validPassword(password)) {
        console.log("Incorrect Password");
        return done(null, false, { message: "Incorrect password." });
      }
      console.log("Log In");
      return done(null, user);
    });
  }
));

module.exports = passport;