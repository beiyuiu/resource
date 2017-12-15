<?php
/*
用户列表，查询出所有的用户，输出给客户端
*/
#2.连接数据库
require('init.php');

#3.执行SQL ——  DQL: 查询结果集多行
$sql = "SELECT * FROM xz_user";
$result = mysqli_query($conn, $sql);

#4.输出执行结果  DQL:失败-false  成功-查询结果的描述对象
#var_dump($result);
if($result===false){
	echo "查询执行失败！请检查SQL语法：$sql";
}else {
	//查询执行成功，抓取所有的记录行
	#$rowList = mysqli_fetch_all($result); //索引数组的数组
	#$rowList = mysqli_fetch_all($result,1); //关联数组的数组
	$rowList = mysqli_fetch_all($result,MYSQLI_ASSOC); //关联数组的数组
	var_dump($rowList);   //行的集合——二维数组
}
#echo "<hr>";
#echo MYSQLI_ASSOC;  #1