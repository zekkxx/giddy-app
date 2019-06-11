var passport = require("../passport/config");

module.exports = function(app){
  app.use(passport.initialize());

  app.post("/login",
    passport.authenticate("local",{
      successRedirect: "/",
      failureRedirect: "/login"})
  );
};
