module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    password: DataTypes.TEXT,
    email: DataTypes.TEXT
  });
  return User;
};
