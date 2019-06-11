/* eslint-disable camelcase */
var router = require("express").Router();

var ensureLoggedIn = require("connect-ensure-login").ensureLoggedIn;
var checkLogin = function(req, res, next){
  if(req.user){
    next();
  } else {
    res.redirect("/login");
  }
};

module.exports = function(passport){
  router.post("/login",
    passport.authenticate("local", {
      successRedirect: "/addhorse",
      failureRedirect: "/login"})
  );

  router.get("/testuser",
  //passport.authenticate('local'),
    ensureLoggedIn(),
    function(req, res) {
      console.log("getting test user");
      res.json({success:(req.user? "Yes":"No"), user:req.user});
      console.log("Done getting test user");
    }
  );

  router.get("/testmiddleware", checkLogin, function(req,res){
    res.send("You are logged in with user " + req.user.username);
  });

  router.get("/logout", function(req, res) { 
    var old_user=req.user;
    req.logout();
    res.json({success:(req.user? "No":"Yes"), user:req.user, "old_user":old_user});
  });
  return router;
};
