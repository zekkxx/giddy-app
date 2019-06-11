var db = require("../models");

module.exports = function(app) {

  app.post("/register", function(req, res){
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

  // app.get("horses/owner/:id", function(req, res) {
  //   db
  // })
};

// example:
// app.get("/:id", function(req, res) {
//   connection.query("SELECT * FROM quotes WHERE id= ?", req.params.id, function(err, dataQuotes) {
//     if (err) throw err;
//     res.render("single-quote", dataQuotes[0]);
//   })
// });
