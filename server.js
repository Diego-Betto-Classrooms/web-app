const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data/db.sqlite');
const bodyParser = require("body-parser");

const session = require("express-session");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  {usernameField:"email", passwordField:"password"},
  function(username, password, done) {
    return done(null, false, { message: 'Incorrect username.' });
  }
));


// const newsData = require('./data/news.json');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.static('public'));
app.use(session({ 
  secret: "itssecret",
  resave: true,
  saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

app.post('/api/login', passport.authenticate('local'), function(req, res) {  
  res.redirect('/home.html');
})

/* function(req, res) { 
  if(req.body.email === 'test@email.com' && req.body.password === '123') {
    res.send({response: 'ok'})
  } else {
    res.send({response: 'ko'})
  }  
}*/

app.get('/api/news', function(req, res) {
  db.serialize(function() {
    db.all('SELECT * FROM news', function(err, rows) {
      if(err) {
        res.status(406);
        res.send(err);
      }
      res.send(rows)
    });
  });
  
})

app.listen(3000)