var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/welcome", function(req, res) {
    db.welcome.findAll({}).then(function(dbwelcome) {
      res.json(dbwelcome);
    });
  });

  // Create a new example
  app.post("/api/welcome", function(req, res) {
    db.welcome.create(req.body).then(function(dbwelcome) {
      res.json(dbwelcome);
    });
  });

  // Delete an example by id
  // app.delete("/api/welcome/:id", function(req, res) {
  //   db.welcome.destroy({ where: { id: req.params.id } }).then(function(dbwelcome) {
  //     res.json(dbwelcome);
  //   });
  // });
};
