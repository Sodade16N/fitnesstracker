const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/sequelize')

class users extends Model {}

users.init(
  {
    // Model attributes are defined here
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.STRING
    },
    usersName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull:false,
      unique:true
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'users', // We need to choose the model name
  },
);

module.exports= users