module.exports = function(sequelize, DataTypes) {
  var Blog = sequelize.define("Blog", {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    img: DataTypes.TEXT,
    location: DataTypes.STRING,
    authorId: DataTypes.INTEGER
  });
  return Blog;
};
