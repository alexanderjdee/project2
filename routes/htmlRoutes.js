//var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("mainPage");
  });

  // Login logic
  app.post("/api/authentication", function(req, res) {
    console.log("email", req.body.email);
    console.log("password", req.body.password);
    res.render(mainPage);
    // Here is the logic to go to MySQL and do the database authentication
  });

  // Login logic
  app.post("/api/register", function(req, res) {
    console.log("email", req.body.email);
    console.log("password", req.body.password);
    res.render(mainPage);
    // Here is the logic to go to MySQL and do the database authentication
  });

  // Load Home page
  app.get("/welcome", function(req, res) {
    res.render("welcome");
  });

  // Load Registration page
  app.get("/register", function(req, res) {
    res.render("register");
  });

  // Load Blog page
  app.get("/blog", function(req, res) {
    res.render("blog");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
