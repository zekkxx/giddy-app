var db = require("../models");

module.exports = function(app) {

  app.post("/register", function(req, res){
    db.User.create(req.body).then(function(response){
      console.log(response);
      res.redirect("/login");
    });
  });

  app.post("/api/horses", function(req, res) {
    var newHorse = {
      horse_name: req.body.horse_name,
      age: req.body.age,
      speed: req.body.speed,
      acceleration: req.body.acceleration,
      reliability: req.body.reliability,
      endurance: req.body.endurance,
      // UserId is the foreign key created by sequelize
      UserId: req.user.id
    };
    db.Horse.create(newHorse).then(function() {
      console.log("We made a horse");
      //res.redirect("/addhorse");
    });
  });

  // get horse data by user
  app.get("/api/owner/:id", function(req, res) {
    db.Owner.findOne({
      include:[db.Horse],
      where: {
        id: req.params.id
      }.then(function(dbOwner){
        res.json(dbOwner);
      })
    });
    // db.User.findOne({
    //   where: {
    //     id: req.params.id
    //   }
    // }).then(function(dbHorse) {
    //   res.json(dbAuthor);
    // });
  });
};