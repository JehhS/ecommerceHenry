const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('order', {
    state: {
      type: DataTypes.ENUM({
          values: ['cart', 'created', 'processing', 'cancelled', 'completed'],
          allowNull: false,
      })
    },
    purchaseAmount: {
      type: DataTypes.INTEGER
    },
    shippingCost: {
      type: DataTypes.STRING
    },
    shippingAddress: {
      type: DataTypes.STRING
    },
    shippingZip: {
      type: DataTypes.STRING
    },
    shippingCity: {
      type: DataTypes.STRING
    },
    shippingState: {
      type: DataTypes.STRING
    }, 
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    comments: {
      type: DataTypes.STRING
    },
    paymentDetails: {
      type: DataTypes.STRING
    },
  });
};