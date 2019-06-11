module.exports = function(app) {
  
  app.get("/addhorse", function(req, res) {
    res.render("addhorseform", {});
  });

  app.get("/horse/owner/:id", function(req, res) {
    // get all horses with owner Id 2
    // .then do res.render and pass in the data I recieve
    res.render("horsebyowner", {id:1, quote:"hi"});
  });

  app.get("/login", function(req, res) {
    res.render("login", {
      type: "Login"
    });
  });

  app.get("/register", function(req, res) {
    res.render("login", {
      type: "Register"
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
