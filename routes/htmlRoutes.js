var db = require("../models");
module.exports = function(app) {
  
  app.get("/addhorse", function(req, res) {
    // once the browser loads it will search all users, once it has all the users it will render the page with that data (1)
    db.User.findAll().then(function(users) {
      res.render("addhorseform", {allUsers: users});
    });      
  });


  // Ellen still in progress
  app.get("/horse/owner/:id", function(req, res) {
    // get all horses with owner Id 2
    db.User.findOne({
      include:[db.Horse],
      where: {id: req.params.id},
      attributes: {
        exclude: ["password"]
      }
    }).then(function(dbUserHorses) {
      // res.json(dbUserHorses);
      res.render("horsebyowner", {usersHorses: dbUserHorses.Horses, username: dbUserHorses.username});
    });
    // .then do res.render and pass in the data I recieve
  });
  // app.get("/test/test1*", function(req, res) {
  //   res.render("horsebyowner", {});
  // });

  // End of Ellen still in progress


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

