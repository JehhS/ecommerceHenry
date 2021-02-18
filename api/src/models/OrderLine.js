const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('OrderLine', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,  
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
};