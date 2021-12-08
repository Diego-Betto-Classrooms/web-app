const express = require('express');
const cors = require('cors');

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
  res.send(newsData);
})

app.listen(5000)