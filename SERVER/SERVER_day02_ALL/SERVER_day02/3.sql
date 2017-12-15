#丢弃数据库xuezi，如果存在的话	
DROP DATABASE IF EXISTS xuezi;
#新建一个数据库xuezi，指定保存字符所用的字符集为UTF8
CREATE DATABASE xuezi CHARSET=UTF8;
#进入指定的库
USE xuezi;

#创建保存用户信息的表
CREATE TABLE user(
  uid INT,			#用户编号，整数
  uname VARCHAR(16),		#用户名，变长字符串  
  upwd VARCHAR(32)		#用户密码，变长字符串
);

#显示数据库中已有的表
SHOW TABLES;