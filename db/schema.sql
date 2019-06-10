DROP DATABASE IF EXISTS horsedb;
CREATE DATABASE horsedb;

USE horsedb;

CREATE TABLE Horse
(
    id INT NOT NULL AUTO_INCREMENT,
    horse_name VARCHAR(16) NOT NULL,
    age INT NOT NULL,
    --Foreign Key of Owner ID
    PRIMARY KEY(id)
);

CREATE TABLE Stat
(
    speed INT NOT NULL,
    acceleration INT NOT NULL,
    reliability INT NOT NULL,
    endurance INT NOT NULL
    --Foreign Key of Horse ID
);

CREATE TABLE User
(
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(16),
    password VARCHAR(12),
    PRIMARY KEY(id)
);