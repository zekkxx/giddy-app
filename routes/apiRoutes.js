var db = require("../models");

module.exports = function(app) {

  app.post("/register", function(req, res){
    db.User.create(req.body).then(function(response){
      console.log(response);
      res.redirect("/login");
    });
  });

  app.post("/api/horses", function(req/*, res*/) {
    db.Horse.create(req.body).then(function(dbHorse) {
      console.log(dbHorse);
      // db.Stat.create(req.body).then(function(dbStat) { 
      //   console.log(dbHorse);
      //   console.log(dbStat);
      // res.json(dbHorse);
      // });
      // db.Stats.create. inside the .then statement I will include sthe res.json
      //Currently posts json object, should redirect to appropriate page.
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


// example:
// app.get("/:id", function(req, res) {
//   connection.query("SELECT * FROM quotes WHERE id= ?", req.params.id, function(err, dataQuotes) {
//     if (err) throw err;
//     res.render("single-quote", dataQuotes[0]);
//   })
// });
