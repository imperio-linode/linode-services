import Express, { Application } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from "../app/routes";
import usersRouter from "../app/routes/users";

const app: Application = Express();

// Setup
app.use(logger('dev'));
app.use(Express.json());
app.use(Express.urlencoded({extended: true}));
app.use(cookieParser());

// Routes
app.use(indexRouter);
app.use('/users', usersRouter);
app.use(Express.static(path.join(__dirname, 'public')));

export { app };
