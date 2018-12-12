CREATE DATABASE checkout;
USE checkout;

CREATE TABLE users (
  userID INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(10),
  password VARCHAR(10),
  PRIMARY KEY ( userID ),
  UNIQUE INDEX (email)
);

-- CREATE TABLE chatroom   (
--   roomID INT NOT NULL AUTO_INCREMENT,
--   room VARCHAR(10),
--   PRIMARY KEY ( roomID ),
--   UNIQUE INDEX (room)
-- );

-- CREATE TABLE messages (
--   roomID INT NOT NULL,
--   userID INT NOT NULL,
--   msg TEXT,
--   created_at DATE,
--   messageID INT NOT NULL AUTO_INCREMENT,
--   PRIMARY KEY (messageID),
--   FOREIGN KEY (roomID) REFERENCES chatroom(roomID),
--   FOREIGN KEY (userID) REFERENCES users(userID)
-- );

/*  Execute this file from the command line by typing:
 *    mysql -u root -p< schema.sql
 *  to create the database and the tables.*/
