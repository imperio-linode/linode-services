const Express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./app/router');
const usersRouter = require('./app/router/users');

const app = Express();
// Setup
app.use(logger('dev'));
app.use(Express.json());
app.use(Express.urlencoded({extended: true}));
app.use(cookieParser());
// Routes
app.use(indexRouter);
app.use('/users', usersRouter);

app.use(Express.static(path.join(__dirname, 'public')));


module.exports = app;
