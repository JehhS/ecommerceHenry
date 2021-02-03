const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("voucher", {
    code: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    used: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    discount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
        isEmail: true,
    },
  });
};
