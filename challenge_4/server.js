const express = require('express');
const bodyParser = require('body-parser');
const dbConnection = require('./db/connection');

const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/signup', (req, res) => {
  const [username, password] = [req.body.username, req.body.password];
  const queryString = `INSERT IGNORE INTO users (username, password) VALUES ("${username}", "${password}");`;
  dbConnection.query(queryString, (err, result) => {
    if (err) {
      console.log('ERROR WRITING NEW USER TO DB: ', err.errno);
      res.sendStatus(500);
      res.end();
    } else if (result.affectedRows === 0) {
      res.sendStatus(401);
      res.end();
    } else {
      res.sendStatus(201);
      res.end();
    }
  });
});

app.post('/login', (req, res) => {
  const [username, password] = [req.body.username, req.body.password];
  const queryString = `SELECT * FROM users WHERE username="${username}"`;
  dbConnection.query(queryString, (err, result) => {
    if (err) {
      console.log('ERROR GETTING USER DATA FROM DB: ', err);
      res.sendStatus(500);
      res.end();
    } else {
      if (result[0].password === password) {
        res.sendStatus(202);
        res.end();
      } else {
        res.sendStatus(401);
        res.end();
      }
    }
  });
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
