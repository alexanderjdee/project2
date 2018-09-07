module.exports = function(sequelize, DataTypes) {
  var Blog = sequelize.define("Blog", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    img: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1],
        isUrl: true
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return Blog;
};
