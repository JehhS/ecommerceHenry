const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("wishList", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
