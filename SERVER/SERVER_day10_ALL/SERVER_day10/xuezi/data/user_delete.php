<?php
/*
实现用户删除。接收客户端提交的要删除的用户编号：uid，
实现新用户的删除。输出删除成功或失败。
*/
#1获取请求数据
@$u = $_REQUEST['uid'];

if($u===null || $u===""){  //进行输入检查
	die("uid required");
}

#2连接数据库
#$conn = mysqli_connect('127.0.0.1',"root","","xuezi",3306);
require('init.php');

#3执行SQL语句
$sql = "DELETE FROM xz_user WHERE uid=$u";
$result = mysqli_query($conn, $sql);  //提交SQL给数据库执行

#4输出执行结果  DML: 失败-false  成功-true	
if($result===false){
	echo "用户删除失败！请检查SQL：$sql";
}else {
	echo "语句执行成功！<br>";
	
	//获取最近的一条DML语句所影响的行数
	$c = mysqli_affected_rows($conn);

	echo "删除操作影响的行数：$c";
}
