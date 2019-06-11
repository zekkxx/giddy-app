require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

var db = require("./models");

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require("cookie-parser")());

//Setup Passport
var passport = require("./passport/passport-init")(app);
console.log(passport);

//Set Ports
var PORT = process.env.PORT || 3000;

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

//Set Forbidden Route
app.get("/forbidden", function(req,res) {
  res.send(403, "You are not authorized");
});

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "Listening on http://localhost:%s/",
      PORT
    );
  });
});

module.exports = app;
