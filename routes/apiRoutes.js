var db = require("../models");

module.exports = function(app) {
  // Get all Users
  app.get("/api/User", function(req, res) {
    db.User.findAll({}).then(function(result) {
      res.json(result);
    });
  });

  // Create a new User
  app.post("/api/User", function(req, res) {
    db.User.create(req.body).then(function(result) {
      res.json(result);
    });
  });

  //Update a User by id
  app.put("/api/Blog/:id", function(req, res) {
    db.User.update(req.body, { where: { id: req.params.id } }).then(function(
      result
    ) {
      res.json(result);
    });
  });

  //Get all Blogs
  app.get("/api/Blog", function(req, res) {
    db.Blog.findAll({}).then(function(result) {
      res.json(result);
    });
  });

  //Get all Blogs by location
  app.get("/api/Blog/location/:location", function(req, res) {
    db.Blog.findAll({ where: { location: req.params.location } }).then(function(
      result
    ) {
      res.json(result);
    });
  });

  //Create a new Blog
  app.post("/api/Blog", function(req, res) {
    db.Blog.create(req.body).then(function(result) {
      res.json(result);
    });
  });

  //Delete a Blog by id
  app.delete("/api/Blog/:id", function(req, res) {
    db.Blog.destroy({ where: { id: req.params.id } }).then(function(result) {
      res.json(result);
    });
  });

  //Update a Blog by id
  app.put("/api/Blog/:id", function(req, res) {
    db.Blog.update(req.body, { where: { id: req.params.id } }).then(function(
      result
    ) {
      res.json(result);
    });
  });
};
