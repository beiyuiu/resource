#(1)设置SQL语句的字符集为UTF8;	
SET NAMES UTF8;
#(2)试着丢弃数据库tedu，如果存在的话；
DROP DATABASE IF EXISTS tedu;
#(3)重建新的数据库tedu，使用UTF8字符集；
CREATE DATABASE tedu CHARSET=UTF8;
#(4)进入数据库tedu;
USE tedu;


#(5)创建班级信息表banji，包含bid、bname、stuCount；
CREATE TABLE banji(
  bid INT,
  bname VARCHAR(7),
  stuCount INT
);
#(6)插入如下的三行记录：
INSERT INTO banji VALUES(10, 'WEB1706', 3);
INSERT INTO banji VALUES(20, 'WEB1707', 2);
INSERT INTO banji VALUES(30, 'WEB1708', 2);


#(7)创建学生信息表student，包含sid、sname、score、schoolDate、bjId
CREATE TABLE student(
  sid INT,
  sname VARCHAR(6),
  score DECIMAL(4,1),
  schoolDate DATE,
  bjId INT
);
#(8)插入七个学生的信息，要求10号班级3名，20号班级2名，30号班级2名员工
INSERT INTO student VALUES
(1,'丁丁',500,'2010-5-1', 10),
(2,'当当',501,'2010-5-2', 10),
(3,'豆豆',502,'2010-5-3', 10),
(4,'丫丫',503,'2010-5-4', 20),
(5,'旭旭',504,'2010-5-5', 20),	
(6,'东东',505,'2010-5-6', 30),
(7,'磊磊',506,'2010-5-7', 30);

#(9)“WEB1708的一名学生休学”：请从学生表中删除该行记录，部门表中WEB1708班人数-1
DELETE FROM student WHERE sid=6;
UPDATE banji SET stuCount=stuCount-1 WHERE bid=30;

#(10)“WEB1706一名学生留级到WEB1707”：请修改学生表中该学生所在班级编号，再修改班级表中WEB1706数量-1，WEB1707数量+1
UPDATE student SET bjId=20 WHERE sid=1;
UPDATE banji SET stuCount=stuCount-1 WHERE bid=10;
UPDATE banji SET stuCount=stuCount+1 WHERE bid=20;









