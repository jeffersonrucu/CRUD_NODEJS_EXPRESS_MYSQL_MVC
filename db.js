const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'crud', 
  'root', 
  'jefferson', 
  {
    dialect: 'mysql',
    host: 'localhost'
  }
);

module.exports = sequelize;