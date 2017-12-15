#设置客户端工具提交的SQL语句所用字符编码为UTF8
SET  NAMES  UTF8;

#试着丢弃数据库tedu，如果存在的话；
DROP DATABASE IF EXISTS tedu;
#重建新的数据库tedu，使用UTF8字符集；
CREATE DATABASE tedu CHARSET=UTF8;
#进入数据库tedu;
USE tedu;

#创建保存学生信息的表student，包含编号、姓名、性别、入学分数、生日；
CREATE TABLE  student(
  sid INT,
  name VARCHAR(6),
  sex VARCHAR(1),		#1个字符，不论中英文
  score DECIMAL(4,1),		#999.9，小数类型
  birthday DATE			#日期类型
);
#查询出已有的表;
#SHOW  TABLES;

#向学生表中插入一行数据
INSERT INTO student VALUES(101,'唐姆科鲁兹滋滋响','男',500,'2000-1-1');
INSERT INTO student VALUES(102,'Mary','女',600,'2000-1-2');
INSERT INTO student VALUES(105,'TomCruise','男',700,'2000-1-3');

#查询出学生表中的所有数据
SELECT  *  FROM  student;
