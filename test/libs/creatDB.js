// var Sequelize = require('sequelize');
// DB config
// var config = require('../../models/server.config');
// var config = {
//   db_database: 'issueTrackerTest',
//   db_user: 'postgres',
//   db_password: '12345678',
//   db_host: process.env.HOST,
//   db_port: '5432'
// };

// DB setting
// var sequelize = require('../../models/connectDB');
// var sequelize = new Sequelize(config.db_database, config.db_user, config.db_password, {
//   dialect: 'postgres',
//   host: config.db_host,
//   port: config.db_port,
//   timezone: 'Asia/Taipei',
//   define: {
//     timestamps: true
//   }
// });

// connect to DB
var issueTable = require('../../models/issueTable');
// sequelize.sync({
//   force: true
// }).then(function() {
//   console.log('Connection has been established successfully.');
// }).catch(function(error) {
//   console.log('Unable to connect to the database:', error);
// });

// // table model
// const issueTable = sequelize.define('issue', {
//   seq: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   status: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     validate: {
//       notEmpty: true
//     }
//   },
//   category: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     validate: {
//       notEmpty: true
//     }
//   },
//   title: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     validate: {
//       notEmpty: true
//     }
//   },
//   owner: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     validate: {
//       notEmpty: true
//     }
//   },
//   priority: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     validate: {
//       notEmpty: true
//     }
//   }
// }, {
//   freezeTableName: true,
//   paranoid: true
// });
//
// // creat table
// issueTable.sync({
//   force: true
// }).then(function() {
//   console.log('---------creat');
//   // insert fake data
//   return issueTable.bulkCreate([
//     { status: 'Open', category: 'category1', title: 'title1', owner: 'Owner1', priority: 'P1' },
//     { status: 'Open', category: 'category2', title: 'title2', owner: 'Owner2', priority: 'P2' },
//     { status: 'Close', category: 'category3', title: 'title3', owner: 'Owner3', priority: 'P3' },
//     { status: 'Pending', category: 'category4', title: 'title4', owner: 'Owner4', priority: 'P4' },
//     { status: 'Processing', category: 'category5', title: 'title5', owner: 'Owner5', priority: 'P5' }
//   ]);
// }).catch(function(error) {
//   console.log('\n\n -----err : ', error);
// });
