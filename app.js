var express = require('express');
var app = express();

var db = require('./db');
var studController = require('./controller/studentController');

app.use('/students',studController);
module.exports = app;