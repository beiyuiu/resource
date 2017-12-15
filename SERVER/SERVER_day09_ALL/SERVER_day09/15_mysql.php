<?php
/*
使用PHP操作MySQL数据库
*/

#1连接数据库服务器
$conn = mysqli_connect("127.0.0.1", "root", "", "tedu", 3306);
#var_dump($conn);

#2提交SQL给服务器执行
$sql = "INSERT INTO dept VALUES(51, 'Test51')";
$result = mysqli_query($conn,  $sql);

#3查看执行结果
if($result===false){   //SQL执行失败
	echo "执行失败！请检查SQL语法：$sql";
}else {					//SQL执行成功
	echo "执行成功！请到数据库中查看";
}
