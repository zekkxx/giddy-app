var db = require("../models");


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
    db.User.create(req.body).then(function(response){
      console.log(response);
      res.redirect("/login");
    });
  });

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


