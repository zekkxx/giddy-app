var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index", {});
    // db.Example.findAll({}).then(function(horsedb) {
    //   res.render("index", {
    //     msg: "Welcome!",
    //     examples: horsedb
    //   });
    // });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(horsedb) {
      res.render("example", {
        example: horsedb
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
