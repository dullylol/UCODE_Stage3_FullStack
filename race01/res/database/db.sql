CREATE DATABASE game;
USE game;
CREATE TABLE users (
    login VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    games_count int NOT NULl DEFAULT 0,

    PRIMARY KEY (login)
);