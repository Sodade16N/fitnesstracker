const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('sql12759579', 'sql12759579', 'RBuaGveAic', {
  host: 'sql8.freesqldatabase.com',
  dialect:'mysql'
});

module.exports =sequelize