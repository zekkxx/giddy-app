var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/horses", function(req, res) {
    db.Horse.create(req.body).then(function(dbHorse) {
      db.Stat.create(req.body).then(function(req, res) { 
        res.json(dbHorse);
      });
      // db.Stats.create. inside the .then statement I will include sthe res.json
    });
  });

  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
