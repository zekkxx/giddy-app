var db = require("../models");

var ensureLoggedIn = require("connect-ensure-login").ensureLoggedIn;
var checkLogin = function(req, res, next){
  if(req.user){
    next();
  } else {
    res.redirect("/login");
  }
};

module.exports = function(app) {
  
  app.get("/addhorse", function(req, res) {
    // once the browser loads it will search all users, once it has all the users it will render the page with that data (1)
    db.User.findAll().then(function(users) {
      res.render("addhorseform", {allUsers: users});
    });      
  });

  app.get("/horse/owner/:id", function(req, res) {
    db.User.findOne({
      include:[db.Horse],
      where: {id: req.params.id},
      attributes: {
        exclude: ["password"] //user has the password in it, let's filter that out...for...security.......yes, I know we saved the password in db in plaintext...get off my back
      }
    }).then(function(dbUserHorses) {
      res.render("horsebyowner", {
        user: dbUserHorses.username,
        horses: dbUserHorses.Horses
      });
      //res.json(dbUserHorses);
    });
    // .then do res.render and pass in the data I recieve
    //res.render("horsebyowner", {id:1, horse:"hi"});
  });

  app.get("/login", function(req, res) {
    res.render("login", {
      type: "Login"
    });
  });

  app.get("/register", function(req, res) {
    res.render("login", {
      type: "Register"
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

