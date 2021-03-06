var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var sessionFileStore = require('session-file-store')(session);
var passport = require('passport');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var rideRouter = require('./routes/Rides');
const config = require('./config');
var mongoose = require('mongoose');

var app = express();
var connect = mongoose.connect(config.mongoUrl,{useFindAndModify:false});
connect.then((db)=>{
  console.log("Database connected");
});

// app.all("*", (req, res, next)=>{
//   if (!req.secure){
//     res.redirect(307,'https://'+req.hostname+':'+app.get('secport')+req.url);
//   }
//   else{
//     return next();
//   }
// })
app.use(session({
  name:'session-id',
  resave : false,
  saveUninitialized : false,
  secret : config.secretKey
}));
app.use(passport.initialize());
app.use(passport.session());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/ride',rideRouter);

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
