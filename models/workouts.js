const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/sequelize')

class workouts extends Model { }

workouts.init(
  {
    // Model attributes are defined here
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.STRING
    },
    user_id: {
      type: Sequelize.STRING,
      allowNull:false
    },
    workout_type: {
      type: Sequelize.STRING,
      allowNull:false
    },
    duration: {
      type: Sequelize.STRING,
      allowNull:false
    },
    date: {
      type: Sequelize.STRING,
      allowNull:false
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'workouts', // We need to choose the model name
  },
);

module.exports = workouts