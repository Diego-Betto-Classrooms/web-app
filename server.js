const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data/db.sqlite');

const newsData = require('./data/news.json');

const app = express();

app.use(cors());

app.use(express.json());

app.post('/api/login', function(req, res) { 
  if(req.body.email === 'test@email.com' && req.body.password === '123') {
    res.send({response: 'ok'})
  } else {
    res.send({response: 'ko'})
  }  
})

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

app.listen(5000)