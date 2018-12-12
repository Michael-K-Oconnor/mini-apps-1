const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();
const port = 3000;

app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ strict: false }));
app.use(express.static('client'));


app.get('/', (req, res) => {
  console.log('Inside GET request');
});

app.post('/uploadJSON', (req, res) => {
  console.log('Inside POST request');
  const body = JSON.stringify({ body: req.body });
  console.log(typeof body, body);

  res.end(body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
