const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('orders_pos', {
    position:{
        type:DataTypes.INTEGER
    },
    idProduct:{
        type: DataTypes.UUID,
        allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
    },
    cuantity:{
        type:DataTypes.INTEGER
    },
    price:{
        type:DataTypes.FLOAT
    },
  },{timestamps: true,
    createdAt: true,
    updatedAt: false
  });
};