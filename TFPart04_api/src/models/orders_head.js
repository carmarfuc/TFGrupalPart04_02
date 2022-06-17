const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {

  sequelize.define('orders_head', {
     id: {
      type: DataTypes.UUID,
      defaulValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    date:{
        type: DataTypes.DATE
    },
    status:{
        type: DataTypes.STRING
    },
    currency:{
        type:DataTypes.STRING,
        allowNull: true
    },
    userEmail:{
        type:DataTypes.STRING,
        allowNull: true,
    },
    total:{
        type:DataTypes.FLOAT
    }    
  },{timestamps: true,
    createdAt: true,
    updatedAt: false
  });
};