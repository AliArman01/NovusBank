const path = require('path');
const cookieParser = require("cookie-parser");
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');

const { check } = require('express-validator');
const multer = require('multer');

const port = 2025;
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// const SmsRoutes = require('./routes/sms-route');

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use(SmsRoutes);

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/smsdb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
});
const smsbird = 'lL0g4e6juFwYtBgTx9QNQWBV8';

const messagebird = require('messagebird');

const message = {
  recipients: ['7319977276'],
  originator: '7226865822',
  body: '<message-text>'
};

messagebird.messages.create(message, function (err, response) {
  if (err) {
    console.error(err);
  } else {
    console.log(response);
  }
});

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})
