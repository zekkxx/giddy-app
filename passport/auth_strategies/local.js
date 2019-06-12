var Strategy = require("passport-local").Strategy;
var db = require ("../../models");

var strategy = new Strategy(
  //Passport will give us the username and password and the "done" function. 
  function(username, password, done) {
    //our user is in Sequelize,
    db.User.findOne({ 
      where:{ username: username }
    }).then(
      function (DBuser) {
        console.log("Back from the database! Let's check if our credentials are good: ");
        if (!DBuser) {
          console.log("User " + username + " was not in the DB");
          return done(null, false, { message: "Incorrect username." });
        }
        if (!DBuser.validPassword(password)) {
          // if (!(DBuser.password===password)) {
          console.log("Password " + password + " does not match the password in the DB: " + DBuser.password ); //For the love of all that is good and secure, never console log user passwords in a production app

          return done(null, false, { message: "Incorrect password." });
        }
        // if the user exists, and the passwords match, we have a successful Authentication! 
        // return the user object. This will get saved in req.user
        console.log("They are!");
        return done(null, DBuser);
      }
    ).catch(function(err) {
      return done(err, false, { message: "Some DB error:" });
    });
  }
);

module.exports = strategy;