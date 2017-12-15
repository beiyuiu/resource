#设置下面SQL语句的字符集
SET NAMES UTF8;
#删除数据库xuezi如果存在的话
DROP DATABASE IF EXISTS xuezi;
#创建数据库xuezi，字符集UTF8
CREATE DATABASE xuezi CHARSET=UTF8;
#进入数据库xuezi
USE xuezi;

#创建笔记本型号表

#创建笔记本表

#创建笔记本图片表

#创建用户表
CREATE TABLE xz_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),
  avatar VARCHAR(128),
  user_name VARCHAR(32),
  gender INT
);
INSERT INTO xz_user VALUES
(NULL,'dingding','123456','ding@tedu.cn','13501234567','img/avatar/default.png', '丁然', 1),
(NULL,'dangdang','123456','dang@tedu.cn','13501234568','img/avatar/default.png', '当当', 0),
(NULL,'doudou','123456','dou@tedu.cn','13501234571','img/avatar/default.png', '张豆', 1),
(NULL,'yaya','123456','ya@tedu.cn','13501234572','img/avatar/default.png', '王小丫', 0);

#创建用户收货地址表

#创建购物车表

#创建订单表

#创建订单详情表

#创建轮播广告表

#创建首页商品表
