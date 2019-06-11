var db = require("../models");


module.exports = function(app) {

//GET Horses
app.get("/api/horses", function(req, res) {
  db.Horse.findAll({}).then(function(dbHorse) {
    console.log(dbHorse);
    res.json(dbHorse);
  });
});

//GET Horse Stats
app.get("/api/horses/:category", function(req, res) {
  db.Stat.findAll({}).then(function(dbStat) {
    console.log(dbStat)
    res.json(dbStat);
  });
});

  app.post("/register", function(req, res) {
    db.User.create(req.body).then(function(response){
      console.log(response);
      res.redirect("/login");
    });
  });

  app.post("/api/horses", function(req, res) {
    db.Horse.create(req.body).then(function(dbHorse) {
      console.log(dbHorse.dataValues.id);
      db.Stat.create(req.body).then(function(dbStat) { 
        console.log(dbHorse);
        console.log(dbStat);
        res.json(dbHorse);
      });
      // db.Stats.create. inside the .then statement I will include sthe res.json
    });
  });
};


