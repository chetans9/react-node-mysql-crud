var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let customersRouter = require('./routes/customers');
require('dotenv').config();
var hbs  = require('hbs');

var app = express();

app.set('view engine', 'hbs');

//app.enable('view cache');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/customers',customersRouter);

module.exports = app;
