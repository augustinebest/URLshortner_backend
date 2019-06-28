require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const morgan = require('morgan');

const app = express();

//CORS ERRORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
      "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if(req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE');
  }
  next();
})

// Routing
const urlDetailsRoutes = require('./routes/urldetails');

//Connecting to the local database
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/UrlShortner', { useNewUrlParser: true }); 

// Connection to mlab
mongoose.connect('mongodb://urlshortner:urlshortner1@ds117846.mlab.com:17846/urlshortner', { useNewUrlParser: true })

app.get('/b', (req, res) => res.json({message: 'Hello World!'}))

//Middleware
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

// Using Routes
app.use('/links', urlDetailsRoutes);

module.exports = app;