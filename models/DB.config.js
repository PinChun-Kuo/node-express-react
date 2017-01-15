import Sequelize from 'sequelize';
import config from './server.config';

const sequelize = new Sequelize(config.db_database, config.db_user, config.db_password, {
  dialect: 'postgres',
  host: config.db_host,
  port: config.db_port,
  timezone: 'Asia/Taipei',
  define: {
    timestamps: true
  }
});

module.exports = sequelize;
