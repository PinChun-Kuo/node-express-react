var Sequelize = require('sequelize');
var config = require('./server.config');

var sequelize = new Sequelize(config.db_database, config.db_user, config.db_password, {
  dialect: 'postgres',
  host: config.db_host,
  port: config.db_port,
  timezone: 'Asia/Taipei',
  define: {
    timestamps: true
  }
});

if(process.env.NODE_ENV === 'production') {
  var connection = sequelize.sync({
    force: true
  });
} else {
  var connection = sequelize.authenticate();
}

connection.then(function() {
  console.log('Connection has been established successfully.');
}).catch(function(error) {
  console.log('Unable to connect to the database:', error);
});

module.exports = sequelize;
