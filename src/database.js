const Sequelize = require('sequelize');

const sequelize = new Sequelize('vivianlopess', 'root', 'senhaforte@lula13', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
