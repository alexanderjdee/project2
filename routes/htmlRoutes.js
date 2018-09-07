var db = require("../models");

var ago = require("s-ago");

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

  // Load Our Team page
  app.get("/ourTeam", function(req, res) {
    res.render("ourTeam");
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

  //Load search by location page
  app.get("/location-search/location/:location", function(req, res) {
    db.Blog.findAll({
      where: {
        location: { $like: "%" + req.params.location + "%" }
      },
      order: [["createdAt", "DESC"]]
    }).then(function(result) {
      if (typeof result[0] == "undefined") {
        return res.render("no-results-found");
      }

      var modifiedResult = result;

      for (i = 0; i < modifiedResult.length; i++) {
        modifiedResult[i].dataValues.createdAt = ago(
          new Date(modifiedResult[i].dataValues.createdAt)
        );
      }

      var handlebarsObject = {
        blogs: modifiedResult
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
    db.Blog.findAll({ order: [["createdAt", "DESC"]] }).then(function(result) {
      var modifiedResult = result;

      for (i = 0; i < modifiedResult.length; i++) {
        modifiedResult[i].dataValues.createdAt = ago(
          new Date(modifiedResult[i].dataValues.createdAt)
        );
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
