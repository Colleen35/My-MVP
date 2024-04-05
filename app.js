// app.js

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const dogsRouter = require('./routes/dogs'); // Import dogs router
const walksRouter = require('./routes/walks'); // Import walks router

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/dogs', dogsRouter); // Mount dogs router
app.use('/api/walks', walksRouter); // Mount walks router

module.exports = app;