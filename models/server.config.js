let config;

if (process.env.NODE_ENV === 'production') {
  config = {
    db_database: 'issueTracker',
    db_user: 'postgres',
    db_password: '12345678',
    db_host: process.env.HOST,
    db_port: '5432'
  };
} else {
  config = {
    db_database: 'issueTrackerTest',
    db_user: 'postgres',
    db_password: '12345678',
    db_host: process.env.HOST,
    db_port: '5432'
  };
}

module.exports = config;
