const express = require('express');
const cors = require('cors');

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

app.listen(5000)