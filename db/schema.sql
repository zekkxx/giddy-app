DROP DATABASE IF EXISTS horsedb;
CREATE DATABASE horsedb;

CREATE TABLE IF NOT EXISTS `Users`
    (
    `id` INTEGER NOT NULL auto_increment , 
    `password` VARCHAR(255), 
    `username` VARCHAR(255) NOT NULL, 
    `created_at` DATETIME NOT NULL,
    PRIMARY KEY(`id`)
    )
    ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `Horses`
    (
    `id` INTEGER NOT NULL auto_increment , 
    `horse_name` VARCHAR(255), 
    `age` INTEGER, 
    `created_at` DATETIME NOT NULL, 
    `user_id` INTEGER, 
    PRIMARY KEY(`id`), 
    FOREIGN KEY(`user_id`) REFERENCES `Users`(`id`) 
    ON DELETE SET NULL ON UPDATE CASCADE
    ) 
    ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `Stats`
    (
    `id` INTEGER NOT NULL auto_increment , 
    `speed` INTEGER, 
    `acceleration` INTEGER, 
    `reliability` INTEGER,
    `endurance` INTEGER, 
    `created_at` DATETIME NOT NULL, 
    `horse_id` INTEGER, 
    PRIMARY KEY(`id`), 
    FOREIGN KEY(`horse_id`) REFERENCES `Horses`(`id`) 
    ON DELETE CASCADE ON UPDATE CASCADE
    ) 
    ENGINE=InnoDB;