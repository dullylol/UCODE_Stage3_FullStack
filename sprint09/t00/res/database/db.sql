/*
CREATE USER 'odehtiarov'@'localhost' IDENTIFIED BY 'securepass';
GRANT ALL PRIVILEGES ON * . * TO 'odehtiarov'@'localhost';
FLUSH PRIVILEGES;
*/

CREATE DATABASE sword;
USE sword;
CREATE TABLE users (
    login VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    status VARCHAR(10) NOT NULl DEFAULT FALSE,

    PRIMARY KEY (login)
);
