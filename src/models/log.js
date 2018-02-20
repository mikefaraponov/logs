const sequelize = require('src/resources/db');

module.exports = sequelize.define('log', {
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  deadline: Sequelize.DATE
}, {
  tableName: 'logs'
});