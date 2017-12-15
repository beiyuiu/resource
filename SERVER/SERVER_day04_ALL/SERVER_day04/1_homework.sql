#设置后续的SQL所用的字符集
SET NAMES UTF8;
#丢弃数据库xuezi，如果存在的话
DROP DATABASE IF EXISTS xuezi;
#创建新的数据库xuezi，保存数据使用字符集UTF8
CREATE DATABASE xuezi CHARSET=UTF8;
#进入数据库
USE xuezi;

#创建笔记本型号表
CREATE TABLE laptop_family(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  fname VARCHAR(32) NOT NULL,
  laptopCount INT NOT NULL DEFAULT  0
);
#插入三行测试数据
INSERT INTO laptop_family VALUES(10, '联想E470', 2);
INSERT INTO laptop_family VALUES(20, 'MacBook', 3);
INSERT INTO laptop_family VALUES(30, '戴尔燃7000', 1);

#创建笔记本信息表
CREATE TABLE laptop(
  lid INT PRIMARY KEY AUTO_INCREMENT,		
  title VARCHAR(128) NOT NULL,
  price DECIMAL(7,2) DEFAULT 99999.99,
  spec VARCHAR(64) NOT NULL,
  pic VARCHAR(128) NOT NULL DEFAULT  'img/default.png',
  shelfTime BIGINT DEFAULT 0,
  isOnsale BOOL DEFAULT FALSE,
  familyId INT,
  FOREIGN KEY(familyId) REFERENCES laptop_family(fid)
);