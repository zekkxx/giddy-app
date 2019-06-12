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

  app.get("/api/horses", function(req, res){
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
      return res.json(response);
    });
  });

  app.get("/api/horses/:category", function(req, res){
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
      return res.json(response);
    });
  });

  app.post("/register", function(req, res){
    db.User.create(req.body).then(function(response){
      console.log(response);
      res.redirect("/login");
    });
  });

  app.post("/api/horses", checkLogin, function(req, res) {
    var newHorse = {
      // eslint-disable-next-line camelcase
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
        return res.json(dbOwner);
      })
    });
  });
};