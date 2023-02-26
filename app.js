const Express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./app/router');
const usersRouter = require('./app/router/users');

const app = Express();

app.use(indexRouter);
app.use('/users', usersRouter);

app.use(logger('dev'));
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(Express.static(path.join(__dirname, 'public')));



module.exports = app;
