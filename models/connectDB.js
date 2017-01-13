var sequelize = require('./DB.config')

// if(process.env.NODE_ENV === 'production') {
//   var connection = sequelize.sync({
//     force: true
//   });
// } else {
//   var connection = sequelize.authenticate();
// }

// connection.then( function() {
//   console.log('\nConnection has been established successfully.');
// }).catch( function(error) {
//   console.log('\nUnable to connect to the database:', error);
// });

sequelize.authenticate().then( function() {
  console.log('\nConnection has been established successfully.');
}).catch( function(error) {
  console.log('\nUnable to connect to the database:', error);
});
