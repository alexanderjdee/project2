var db = require("../models");

module.exports = function(app) {
  // Get all Users
  app.get("/api/User", function(req, res) {
    db.User.findAll({}).then(function(welcomedb) {
      res.json(welcomedb);
    });
  });

  //Get all Blogs
  app.get("/api/Blog", function(req, res) {
    db.Blog.findAll({}).then(function(welcomedb) {
      res.json(welcomedb);
    });
  });

  app.get("/api/Blog/:id", function(req, res) {
    db.Blog.findOne({ where: { id: req.params.id } }).then(function(dbwelcome) {
      res.json(dbwelcome);
    });
  });

  // Create a new User
  app.post("/api/User", function(req, res) {
    db.User.create(req.body).then(function(welcomedb) {
      res.json(welcomedb);
    });
  });

  //Create a new Blog
  app.post("/api/Blog", function(req, res) {
    db.Blog.create(req.body).then(function(welcomedb) {
      res.json(welcomedb);
    });
  });

  //Delete an Blog by id
  app.delete("/api/Blog/:id", function(req, res) {
    console.log(req.params.id);
    db.Blog.destroy({ where: { id: req.params.id } }).then(function(dbwelcome) {
      res.json(dbwelcome);
    });
  });
};
