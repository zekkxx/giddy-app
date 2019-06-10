module.exports = function(app) {
  
  app.get("/addhorse", function(req, res) {
    res.render("addhorseform", {});
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
