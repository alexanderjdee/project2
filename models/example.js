module.exports = function(sequelize, DataTypes) {
  var welcome = sequelize.define("welcome", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return welcome;
};
