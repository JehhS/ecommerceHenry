const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('WishList', {
    state: {
      type: DataTypes.ENUM({
          values: ['created', 'cancelled'],
          allowNull: false,
      })
    },
  });
};