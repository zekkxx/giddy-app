var db = require("../models");

module.exports = function (app) {
  
  // Horse Name GET
  app.get("api/horses", function (req, res) {
    db.horsedb.findAll({}).then(function (horsedb) {
      res.json(horsedb);
      console.log(res.json(horsedb));
    });
  });

  // Horse Stats GET
  app.get("api/horses/:category", function (req, res) {
    db.horsedb.findAll({
      where: {
        id: req.params.category
      }
    }).then(function (horsedb) {
      res.json(horsedb);
    });
  });

  // Horse ID GET
  app.get("api/horses/horse/:id", function (req, res) {
    db.horsedb.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (horsedb) {
      console.log(horsedb);
      res.json(horsedb);
    });
  });

  // Horse Owner GET
  app.get("/horses/owner/:id", function (req, res) {
    db.horsedb.findAll({
      where: {
        id: req.params.id
        }
    }).then(function (req, res) {
      res.json(horsedb);

    });
  });
};


