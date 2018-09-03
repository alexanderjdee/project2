var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("mainPage");
  });

  // Load example page and pass in an example by id
  app.get("/welcome", function(req, res) {
    res.render("welcome");
  });

  // Load registration page
  app.get("/register", function(req, res) {
    res.render("register");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  }); 
};