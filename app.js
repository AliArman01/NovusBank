const path = require('path');
const cookieParser = require("cookie-parser");
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const { check } = require('express-validator');
const port = 4500;

const smsRoute = require('./routes/sms-route')

const MONGODB_URI =
  'mongodb://localhost:27017/userDataDB';
const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
});

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(smsRoute);


app.use(express.static(path.join(__dirname, 'public')));

app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store
  })
);

mongoose
  .connect(MONGODB_URI)
  .then(result => {
    console.log("Database Connected")
  })
  .catch(err => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
