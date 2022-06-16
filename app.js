// core dependencies
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// create route objects
var indexRouter = require('./routes/index');
var meteoRouter = require('./routes/meteo');

// the app object
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// app config
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

// tell the app to use these routes
app.get('/public/*',function(req, res, next) {
  console.log('test public');
  console.log(req.path);
  var path_name=req.path;
  res.sendFile(path.join(__dirname, path_name));
});

/*
app.get('*', function(req, res, next) {
  console.log("test html");
  console.log(req.path)
  var path_name="";

  if(req.path==""|| !req.path || req.path=='/'){
    path_name="/views/index.pug";
  }else{
    path_name='/views/'+req.path+'.pug';
  } 
  console.log(path_name);
  res.render(path.join(__dirname, path_name));
});*/

app.use('/meteo', meteoRouter);
app.use('/', indexRouter);

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
  res.send(res.locals.message)
});

// expose this app to scripts that require it, i.e. myapp/bin/www
module.exports = app;
