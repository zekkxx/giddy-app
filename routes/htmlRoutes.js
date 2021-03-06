var db = require("../models");

//var ensureLoggedIn = require("connect-ensure-login").ensureLoggedIn;
var checkLogin = function(req, res, next){
  if(req.user){
    next();
  } else {
    res.redirect("/login");
  }
};
var checkLoggedOut = function(req, res, next){
  if(!req.user){
    next();
  } else {
    res.redirect("/");
  }
};
var userCase = function(entity){
  if(entity){
    return true;
  } else {
    return false;
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
        horse: response,
        userCase: userCase(req.user)
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
        horse: response,
        userCase: userCase(req.user)
      });
      // res.json(response);
    });
    
  });

  app.get("/horses/horse/:id", function(req, res){
    db.Horse.findOne({
      include:{
        model: db.User,
        attributes: {
          exclude: ["password"]
        }
      },
      where: {id: req.params.id}
    })
      .then(function(result){
        res.render("horsebyhorse", {
          horse: result,
          userCase: userCase(req.user)
        });
        //res.json(result);
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
      var isOwnerValue;
      if(req.user){
        isOwnerValue = (req.user.id === dbUserHorses.id);
      } else {
        isOwnerValue = false;
      }
      console.log(isOwnerValue);
      res.render("horsebyowner", {
        user: dbUserHorses.username,
        horses: dbUserHorses.Horses,
        userCase: userCase(req.user),
        isOwner: isOwnerValue
      });
      //res.json(dbUserHorses);
    });
  });

  app.get("/login", checkLoggedOut, function(req, res) {
    res.render("login", {
      type: "Login",
      userCase: userCase(req.user)
    });
  });

  app.get("/register", checkLoggedOut, function(req, res) {
    res.render("login", {
      type: "Register",
      userCase: userCase(req.user)
    });
  });

  app.get("/addhorse", checkLogin, function(req, res) {
    // once the browser loads it will search all users, once it has all the users it will render the page with that data (1)
    db.User.findAll().then(function(users) {
      res.render("addhorseform", {
        allUsers: users,
        userCase: true
      });
    });      
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404", {
      userCase: userCase(req.user)
    });
  });
};

