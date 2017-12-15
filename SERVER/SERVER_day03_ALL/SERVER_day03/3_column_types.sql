SET NAMES UTF8;
DROP DATABASE IF EXISTS xuezi;
CREATE DATABASE xuezi CHARSET=UTF8;
USE xuezi;

/*
CREATE TABLE user(
  uid INT,
  uname VARCHAR(9),
  upwd VARCHAR(12),
  email VARCHAR(64),
  phone CHAR(11),
  avatar VARCHAR(128),
  userName VARCHAR(6),
  sex CHAR(1),
  isOnline BOOL,
  registerTime DATETIME
);
*/

CREATE TABLE user(
  uid INT PRIMARY KEY,
  uname VARCHAR(9) UNIQUE NOT NULL,
  upwd VARCHAR(12) NOT NULL
);
/*
INSERT INTO user VALUES
(NULL, 'john1', '789'),
(NULL, 'john2', '789');
*/


INSERT INTO user VALUES(18, 'tom', '123');
INSERT INTO user VALUES(20, 'king', '123');
INSERT INTO user VALUES(15, 'mary', '123');
#INSERT INTO user VALUES(25, NULL, '999');
#INSERT INTO user VALUES(26, NULL, '999');
