const express = require('express');
const dbConnection = require('./db/db.js')
const bodyParser = require('body-parser')

const app = express()
const port = 3000


app.use(bodyParser.json({ strict: false }));
app.use(express.static('public'))

app.get('/', (req, res) => {
  dbConnection.query('SELECT * FROM users;', (err, results) => {
    console.log(results)
    res.send(results)
  })
})

app.post('/login', (req, res) => {
  console.log(req.body)
  let email = req.body.email;
  let password = req.body.password;
  let type = req.body.type;
  if (type === 'SignUpPage') {
    dbConnection.query(`INSERT INTO users (email, password)
    VALUES ("${email}", "${password}");`, (err, results, feilds) => {
      if (err) {
        res.sendStatus(500)
        res.end
      } else {
        res.sendStatus(200);
        res.end()
      }
    })
  } else if (type === 'LogInPage') {
    console.log('NEED TO VERIFY LOGIN');
    res.end()
  }
})

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))