var db = require("../models");
module.exports = function(app) {
  
  app.get("/addhorse", function(req, res) {
    // once the browser loads it will search all users, once it has all the users it will render the page with that data (1)
    db.User.findAll().then(function(users) {
      res.render("addhorseform", {allUsers: users});
    });      
  });

  app.get("/horse/owner/:id", function(req, res) {
    // get all horses with owner Id 2
    db.Horse.findAll({
      include:[db.Horse],
      where: {UserId: req.params.id}
    }).then(function(dbHorses) {
      res.json(dbHorses);
    });
    // .then do res.render and pass in the data I recieve
    res.render("horsebyowner", {id:1, horse:"hi"});
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

