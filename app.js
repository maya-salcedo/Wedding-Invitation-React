const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const couple = require('./routes/couple');
const wedding = require('./routes/wedding');
const gift = require('./routes/gift');
const travel = require('./routes/travel');
const rsvp = require('./routes/rsvp');
const accept = require('./routes/accept');
const decline = require('./routes/decline');
const confirmedAccept = require('./routes/confirmedAccept');
const unconfirmedAccept = require('./routes/unconfirmedAccept');
const confirmedDecline = require('./routes/confirmedDecline');
const unconfirmedDecline = require('./routes/unconfirmedDecline');
const testdb = require('./routes/testdb');
require('dotenv').config();
const { text } = require('express');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.use(logger('dev'));
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//heroku deployment
app.use(express.static(path.join(__dirname, './client/build')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/couple', couple);
app.use('/wedding', wedding);
app.use('/gift', gift);
app.use('/travel', travel);
app.use('/rsvp', rsvp);
app.use('/accept', accept);
app.use('/decline', decline);
app.use('/confirmed-accept', confirmedAccept);
app.use('/unconfirmed-accept', unconfirmedAccept);
app.use('/confirmed-decline', confirmedDecline);
app.use('/unconfirmed-decline', unconfirmedDecline);
app.use('/testdb', testdb);
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
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
