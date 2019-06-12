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

  app.get("/", function(req, res){
    res.redirect("/horses");
  });

  app.get("/horses", function(req, res){
    db.Horse.findAll({
      include:{
        model: db.User,
        attributes: {
          exclude: ["password"]
        }
      },
      order: [["id", "DESC"]],
      limit: 10
    }).then(function(response){
        res.render("index", {
        horse: response
    });
      //res.json(response);
    });
  });

  app.get("/horses/:category", function(req, res){
    db.Horse.findAll({
      include:{
        model: db.User,
        attributes: {
          exclude: ["password"]
        }
      },
      order: [[req.params.category, "DESC"]],
      limit: 10
    }).then(function(response){
      res.render("index", {
        horse: response
      });
      // res.json(response);
    });
    
  });

  app.get("/horses/owner/:id", function(req, res) {
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
    });
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

  app.get("/addhorse", checkLogin, function(req, res) {
    // once the browser loads it will search all users, once it has all the users it will render the page with that data (1)
    db.User.findAll().then(function(users) {
      res.render("addhorseform", {allUsers: users});
    });      
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

