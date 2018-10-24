var createError = require('http-errors');
var express = require('express');
var path = require('path');
const methodOverride = require('method-override');

//useful only for raw cookies
//express auth has cookie-parser already
// var cookieParser = require('cookie-parser'); 
var logger = require('morgan');

var tacosRouter = require('./routes/tacos');
var piroshkysRouter = require('./routes/piroshkys');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev')); //logger w/ 'dev' settings
app.use(express.json()); //parses json adds to req.body
app.use(express.urlencoded({ extended: true })); //x-www-url-encoded(?) aka form data is added to req.body
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'static'))); //where our static files are
app.use(methodOverride('_method'));

app.use('/tacos', tacosRouter);
app.use('/piroshkys', piroshkysRouter);

app.use('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
