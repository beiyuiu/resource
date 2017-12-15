/*
删除并重建数据库xuezi，
表laptop(lid、title、price、spec/规格、shelfTime/上架时间、isOnsale/是否特价、stockCount/库存数量)，使用恰当的列类型。试着插入4行记录。
*/
#设置SQL语句字符集为UTF8;
SET NAMES UTF8;
#丢弃数据库xuezi,如果存在的话
DROP DATABASE IF EXISTS xuezi;
#创建数据库xuezi，字符集为UTF8
CREATE DATABASE xuezi CHARSET=UTF8;
#进入数据库
USE xuezi;

#创建笔记本商品信息表
CREATE TABLE laptop(
  lid INT,
  title VARCHAR(128),
  price DECIMAL(7,2),
  spec VARCHAR(32),
  pic VARCHAR(128),   #笔记本要显示的主图片，用字符串记录其URL地址
  shelfTime DATETIME, #上架时间
  isOnsale BOOL,      #是否特价商品
  stockCount INT      #库存数量
);
#插入4行记录     
INSERT INTO laptop VALUES
(1,'戴尔燃7000',6599,'金色8G 1T','img/1.jpg','2017-5-10 22:18:3', TRUE, 9813),  
(2,'MacBook Air',6599,'金色8G 1T','img/2.jpg','2017-5-10 22:18:3', FALSE, 9813),  
(3,'神州战神',6599,'金色8G 1T','img/3.jpg','2017-5-10 22:18:3', FALSE, 9813),  
(4,'联想小新',6599,'金色8G 1T','img/4.jpg','2017-5-10 22:18:3', TRUE, 9813);