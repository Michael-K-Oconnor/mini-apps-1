// let http = require('http');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  console.log('Inside server');
  res.end('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});


const model = {
  count: 0,
  activeGame: true,
  players: ['X', '0'],
  winner: null,
  prevWinner: null,
  board: [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
};
