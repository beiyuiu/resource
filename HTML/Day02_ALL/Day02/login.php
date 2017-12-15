<?php
/*
用户登录：接收客户端提交的uname和upwd，执行数据库查询，输出登录成功或失败
*/
#1.接收客户端提交的数据
@$n = $_REQUEST['uname'];
@$p = $_REQUEST['upwd'];

if($n===null || $n===""){
	die("uname required");
}
if($p===null || $p===""){
	die("upwd required");
}

#2.连接数据库
require('init.php');

#3.执行SQL ——  DQL: 查询结果集有0或1行
$sql = "SELECT * FROM xz_user WHERE uname='$n' AND upwd='$p'";
$result = mysqli_query($conn, $sql);

#4.输出执行结果  DQL:失败-false  成功-查询结果的描述对象
#var_dump($result);
if($result===false){
	echo "执行查询失败！请检查SQL语法：$sql";
}else {
	//试着从查询结果集中抓取一行记录
	#$row = mysqli_fetch_row($result); //返回一个索引数组
	#$row = mysqli_fetch_assoc($result); //返回一个关联数组
	#var_dump($row);
	$row = mysqli_fetch_assoc($result);
	if($row===null){	//查询结果中一行数据都没有
		echo "用户名或者密码错误";
	}else {   //查询结果中抓到一行数据
		echo "登录成功！<br>";
		var_dump($row);
	}
}

