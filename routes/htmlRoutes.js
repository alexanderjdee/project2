var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("welcome");
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
  app.get("/mainPage", function(req, res) {
    res.render("mainPage");
  });

  app.get("/location-search/location/:location", function(req, res) {
    db.Blog.findAll({ where: { location: req.params.location } }).then(function(result) {
      var handlebarsObject = {
        blogs: result
      };
      res.render("location-search", handlebarsObject);
    });
  });

  // Load Registration page
  app.get("/register", function(req, res) {
    res.render("register");
  });

  // Load Blog page
  app.get("/blog", function(req, res) {
    db.Blog.findAll({}).then(function(result) {
      var modifiedResult = result;

      for (i = 0; i < modifiedResult.length; i++) {
        var createdDate = new Date(modifiedResult[i].dataValues.createdAt);
        var day = createdDate.getDate();
        var month = createdDate.getMonth();
        var year = createdDate.getFullYear();
        modifiedResult[i].dataValues.createdAt = day + "/" + month + "/" + year;
      }

      var handlebarsObject = {
        blogs: modifiedResult
      };

      res.render("blog", handlebarsObject);
    });
  });

  // Load Login page
  app.get("/login", function(req, res) {
    res.render("login");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
