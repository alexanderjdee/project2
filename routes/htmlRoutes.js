var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.welcome.findAll({}).then(function(dbwelcome) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbwelcome
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/welcome/:id", function(req, res) {
    db.welcome
      .findOne({
        where: { id: req.params.id }
      })
      .then(function(dbwelcome) {
        res.render("welcome", {
          example: dbwelcome
        });
      });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
