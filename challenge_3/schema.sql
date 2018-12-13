CREATE DATABASE checkout;
USE checkout;

CREATE TABLE users (
  userID INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(30),
  password VARCHAR(30),
  PRIMARY KEY ( userID ),
  UNIQUE INDEX (email)
);

CREATE TABLE addresses   (
  street VARCHAR(30),
  city VARCHAR(30),
  state VARCHAR(30),
  zipCode INT,
  userID INT NOT NULL,
  FOREIGN KEY (userID) REFERENCES users(userID)
);

CREATE TABLE cards   (
  cardNum INT,
  expireDate VARCHAR(30),
  ccv INT,
  zipCode INT,
  userID INT NOT NULL,
  FOREIGN KEY (userID) REFERENCES users(userID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root -p< schema.sql
 *  to create the database and the tables.*/
