-- DROP DATABASE IF EXISTS horsedb;
CREATE DATABASE horsedb;

-- ************************************** `User`
CREATE TABLE `User`
(
 `UserId`   integer NOT NULL AUTO_INCREMENT ,
 `Password` varchar(45) NOT NULL ,
 `UserName` varchar(45) NOT NULL ,
 `Created`  timestamp NOT NULL ,

PRIMARY KEY (`UserId`)
);
-- ************************************** `Horse`

CREATE TABLE `Horse`
(
 `HorseId`      integer NOT NULL AUTO_INCREMENT ,
 `HorseName`    varchar(45) NOT NULL ,
 `UserId`       integer NOT NULL ,
 `Age`          integer NOT NULL ,
 `HorseCreated` timestamp NOT NULL ,

PRIMARY KEY (`HorseId`),
KEY `fkIdx_24` (`UserId`),
CONSTRAINT `FK_24` FOREIGN KEY `fkIdx_24` (`UserId`) REFERENCES `User` (`UserId`)
);
-- ************************************** `HorseStats`

CREATE TABLE `HorseStats`
(
 `HorseId`      integer NOT NULL ,
 `TopSpeed`     integer NOT NULL ,
 `Acceleration` integer NOT NULL ,
 `Reliability`  integer NOT NULL ,
 `Endurance`    integer NOT NULL ,

PRIMARY KEY),
KEY `fkIdx_44` (`HorseId`),
CONSTRAINT `FK_44` FOREIGN KEY `fkIdx_44` (`HorseId`) REFERENCES `Horse` (`HorseId`)
);