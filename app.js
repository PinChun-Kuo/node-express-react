import express from 'express';
import path from 'path';
// import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import index from './routes/index';
import issue from './routes/issue';
import issueTable from './models/issueTable';

const app = express();
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// setting for using Node.js + Express to host a static html
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Direct the root directory of the static files to '/.dist'
// app.use(express.static(__dirname + '/dist'));
app.use(express.static(path.join(__dirname, '/dist')));

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// set some CORS
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.header('Access-Control-Allow-Origin', '*');
  // Request headers you wish to allow
  res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept');
  // Request methods you wish to allow
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Pass to next layer of middleware
  next();
});

// set header
const setHeader = function(req, res, next) {
  res.set('Content-Type', 'application/json');
  next();
};

app.use('/', index);
// app.use('/issue', setHeader, issue);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const port = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'production') {
  issueTable.sync({
    force: false
  }).then(function() {
    app.use('/issue', setHeader, issue);
  }).then(function() {
    app.listen(port, function() {
      console.log('\n\nlistening on port', port);
    });
  }).catch(function(err) {
    console.log('\n\n err is : ', err);
  });
} else {
  issueTable.sync({
    force: true
  }).then(function() {
    issueTable.bulkCreate([
      { status: 'Open', category: 'category1', title: 'title1', owner: 'Owner1', priority: 'P1' },
      { status: 'Open', category: 'category2', title: 'title2', owner: 'Owner2', priority: 'P2' },
      { status: 'Close', category: 'category3', title: 'title3', owner: 'Owner3', priority: 'P3' },
      { status: 'Pending', category: 'category4', title: 'title4', owner: 'Owner4', priority: 'P4' },
      { status: 'Processing', category: 'category5', title: 'title5', owner: 'Owner5', priority: 'P5' }
    ]).then(function() {
      app.use('/issue', setHeader, issue);
    }).then(function() {
      app.listen(port, function() {
        console.log('\n\nlistening on port', port);
      });
    }).catch(function(err) {
      console.log('\n\n err is : ', err);
    });
  }).catch(function(err) {
    console.log('\n\n err is : ', err);
  });
}

module.exports = app;
