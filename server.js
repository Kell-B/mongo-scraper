// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const cheerio = require('cheerio');
const axios = require('axios');
const morgan = require('morgan');

var app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
	res.render('home');
});

// Mongodb
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mongoHeadlines';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Listener

app.listen(3000, () => {
	console.debug('App listening on port: 3000');
});
