var passport = require("../passport/config");

module.exports = function(app){
  app.post("/login",
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/login"})
  );
};
