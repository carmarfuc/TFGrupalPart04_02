const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('orders_pos', {
    idProduct:{
      type: DataTypes.UUID,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
    },
    price:{
      type:DataTypes.FLOAT
    },
    position:{
      type:DataTypes.INTEGER
    },
    cuantity:{
      type:DataTypes.INTEGER
    },
  },{timestamps: true,
    createdAt: true,
    updatedAt: false
  });
};