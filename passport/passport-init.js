var passport = require("passport");
var session = require("express-session")({ secret: "w34r374383574r0un0", resave: false, saveUninitialized: false });

var db = require("../models");

module.exports = function(expressApp) {
  //initialize your authentication strategies
  passport.use(require("./auth_strategies/local"));

  //===============BOILERPLATE
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

  expressApp.use(session);  

  //initialize Passport and let Express know about it
  expressApp.use(passport.initialize());
  // Set up sessions 
  expressApp.use(passport.session());
  //==============END BOILERPLATE

  //Initialize authentication specific routes. This needs to be changed to match your configs
  expressApp.use(
    require("../routes/loginRoutes")(passport)
  );
  return passport;
};
// serializeUser is called after every request to persist the data
//Since our user is a Sequelize Model, we can just save the model to serialize it.
//the data is now persisted to the database
var serializeUser = function(user, done) {
  var username = (user.username? user.username: user[0].username);
  console.log("serializing user:", username);
  done(null, username);//save the user's username in the cookie. This is how Passport wants you to do this. 
};

//  deserializeUser is called when resuming a session
//  it should get your user information from the database
var deserializeUser = function(savedUsername, done) {
  console.log("Deserializing user: ", savedUsername);
  db.User.findOne({ 
    where:{ username: savedUsername },
    attributes: {
      exclude: ["password"] //user has the password in it, let's filter that out...for...security.......yes, I know we saved the password in db in plaintext...get off my back
    }
  }) 
    .then(function(user) {
      console.log("Got user:", user);

      done(null, user);//We have successfully deserialized our user. Call done() with null as the first arg, since no errors.
      //you can now get your user info in req.user
    })
    .catch(function(err){
      //check for errors...
      console.log("Failed to get user:", err);
      done(err, null);
    });
};
