#�������ݿ�xuezi��������ڵĻ�	
DROP DATABASE IF EXISTS xuezi;
#�½�һ�����ݿ�xuezi��ָ�������ַ����õ��ַ���ΪUTF8
CREATE DATABASE xuezi CHARSET=UTF8;
#����ָ���Ŀ�
USE xuezi;

#���������û���Ϣ�ı�
CREATE TABLE user(
  uid INT,			#�û���ţ�����
  uname VARCHAR(16),		#�û������䳤�ַ���  
  upwd VARCHAR(32)		#�û����룬�䳤�ַ���
);

#��ʾ���ݿ������еı�
SHOW TABLES;