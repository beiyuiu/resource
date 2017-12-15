<?php
/*
实现用户注册。接收客户端提交的注册数据：uname、upwd、email、phone，实现新用户的注册。输出注册成功或失败。
*/

#1.接收客户端提交的数据
#var_dump($_REQUEST);  客户端提交的数据被PHP解释器保存在一个关联数组中：$_REQUEST
@$n = $_REQUEST['uname'];		#@用于压制错误消息
@$p = $_REQUEST['upwd'];
@$m = $_REQUEST['email'];
@$h = $_REQUEST['phone'];

//客户端未提交uname 或 提交的uname值为""
if($n===null || $n===""){  
	die("uname required");//终止当前页面的执行，给客户端输出一个错误提示消息
}
//客户端未提交upwd 或 提交的upwd值为""
if($p===null || $p===""){  
	die("upwd required");
}
if($m===null || $m===""){  
	die("email required");
}
if($h===null || $h===""){  
	die("phone required");
}

#2.连接到MySQL服务器
#$conn = mysqli_connect("127.0.0.1","root","","xuezi",3306);
require('init.php');

#3.向MySQL服务器提交SQL语句
$sql = "INSERT INTO xz_user VALUES(NULL,'$n','$p','$m','$h','img/avatar/default.png',NULL,NULL)";
$result = mysqli_query($conn, $sql);

#4.输出执行结果  DML: 失败-false  成功-true
if($result===false){
	echo "注册失败！请检查SQL: $sql";
}else{
	echo "注册成功！<br>";
	//获取刚刚执行的INSERT语句产生的自增编号：
	$uid = mysqli_insert_id($conn);

	echo "新用户在数据库中的自增编号为：$uid";
}
