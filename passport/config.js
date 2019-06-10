var db = require("../models");
var passport = require("passport")
  , LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy(
  function(givenUsername, password, done) {
    db.User.findOne({ where: {username: givenUsername} }).then(function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        console.log("Invalid Username");
        return done(null, false, { message: "Incorrect username." });
      }
      if (!user.validPassword(password)) {
        console.log("Incorrect Password");
        return done(null, false, { message: "Incorrect password." });
      }
      console.log("Hey it worked!");
      return done(null, user);
    });
  }
));

module.exports = passport;