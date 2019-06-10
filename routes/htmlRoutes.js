var express = require("express");
var router = express.Router();

var db = require("../models/index");

module.exports = function(app) {
  // Load index page
  app.get("/addhorse", function(req, res) {
    // db.Example.findAll({}).then(function(dbExamples) {
    //   res.render("index", {
    //     msg: "Welcome!",
    //     examples: dbExamples
    //   });
    // });
    res.render("addhorseform", {});
  });

  router.post("/horses", function(req, res){
    console.log(req);
    db.addOne(req.body.name, function(result) {
      res.json({id: result.insertId});
    })
  })

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
