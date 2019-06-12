var db = require("../models");

<<<<<<< HEAD

module.exports = function(app) {

//GET Horses // need to get back (json) list of 10 in order by id.
app.get("/api/horses", function(req, res) {
  db.Horse.findAll({/*limit 10, sort by id desc*/}).then(function(dbHorse) {
    console.log(dbHorse);
    res.json(dbHorse);
  });
});

//GET Horse Stats // need to get back (json) list of 10 sortd by category
app.get("/api/horses/:category", function(req, res) {
  db.Stat.findAll({/*Limit 10, sort by categories*/}).then(function(dbStat) {
    console.log(dbStat)
    res.json(dbStat);
  });
});

  app.post("/register", function(req, res) {
=======
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
>>>>>>> 785fa919a6b0e6ed75aad6129975a8abc5bf983c
    db.User.create(req.body).then(function(response){
      console.log(response);
      res.redirect("/login");
    });
  });

<<<<<<< HEAD
  app.post("/api/horses", function(req/*, res*/) {
    db.Horse.create(req.body).then(function(dbHorse) {
      console.log(dbHorse.dataValues.id);
      db.Stat.create(req.body).then(function(dbStat) { 
        console.log(dbHorse);
        console.log(dbStat);
        //res.json(dbHorse);
      });
      // db.Stats.create. inside the .then statement I will include sthe res.json
      //Currently posts json object, should redirect to appropriate page.
    });
  });
};


  app.post("/api/horses", function(req, res) {
=======
  app.post("/api/horses", checkLogin, function(req, res) {
>>>>>>> 785fa919a6b0e6ed75aad6129975a8abc5bf983c
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
        return res.json(dbOwner);
      })
    });
  });
};
