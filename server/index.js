const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

const recipeRouter = require('./routes/recipe');

app.use('/', recipeRouter);

const mongoDB = require(path.resolve(__dirname, './login_credentials.js'));
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = app;