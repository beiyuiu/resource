#设置SQL语句的字符集为UTF8;
SET NAMES UTF8;
#试着丢弃数据库xuezi，如果存在的话；
DROP DATABASE IF EXISTS xuezi ;
#重建新的数据库xuezi，使用UTF8字符集；
CREATE DATABASE xuezi CHARSET=UTF8; 
#进入数据库xuezi;
USE xuezi;

#创建保存笔记本信息的表laptop，包含编号、标题、价格、购买数量、上架日期；
CREATE TABLE laptop(
  lid INT,
  title VARCHAR(64),
  price DECIMAL(7,2),		#99999.99
  count INT,
  shelfDate DATE
);
#插入三行记录;
INSERT INTO laptop VALUES(
  10, 'MacBook Air', 5899, 2, '2017-1-10'
);
INSERT INTO laptop VALUES(
  15, '戴尔游侠', 5299, 1, '2017-2-11'
);
INSERT INTO laptop VALUES(
  18, '联想E480', 4888, 5, '2017-3-20'
);
#查询出笔记本信息表中所有的数据
