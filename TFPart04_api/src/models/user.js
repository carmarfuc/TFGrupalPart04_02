
const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define('user', {
    id: {
      type: DataTypes.STRING,
      //defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    usertype: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nickName: {    //2
      type: DataTypes.STRING,
      allowNull: true,
    },
    fullName: {       //3
      type: DataTypes.STRING,
      allowNull: true,
    },
    mail: {       //8
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    phone: {      //6
      type: DataTypes.STRING,
      AllowNull: true,
    },
    address: {      //5
      type: DataTypes.STRING,
      allowNull: true,
    },
    birthdate: {  //4
      type: DataTypes.STRING,
      allowNull: true,
    },
    country: {    //7
      type: DataTypes.STRING,
      allowNull: true,
    },
    verify: {  //11
      type: DataTypes.BOOLEAN,
    },
  },
    {
      timestamps: true,
      createdAt: true,
      updatedAt: false
    }

  );
}

