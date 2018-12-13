DROP DATABASE IF EXISTS connectfour;

CREATE DATABASE IF NOT EXISTS connectfour;

USE connectfour;

CREATE TABLE users (
    user_id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (user_id)
)