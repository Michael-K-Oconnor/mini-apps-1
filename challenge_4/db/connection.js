const mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

const connection = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'connectfour',
});

connection.connect((error) => {
  if (error) {
    console.log('error', error);
  } else {
    console.log('connection successful');
  }
});

module.exports = connection;
