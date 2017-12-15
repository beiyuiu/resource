<?php
/*
用户中心-修改用户基本信息。
接收客户端提交的uid、user_name、gender、email、phone，更新到数据库中；输出更新成功或失败！
*/
#1.接收客户端提交的数据
@$u = $_REQUEST['uid'];
@$n = $_REQUEST['user_name'];
@$g = $_REQUEST['gender'];
@$e = $_REQUEST['email'];
@$p = $_REQUEST['phone'];

if($u===null || $u===""){
	die("uid required");
}
if($n===null || $n===""){
	die("user_name required");
}
if($g===null || $g===""){
	die("gender required");
}
if($e===null || $e===""){
	die("email required");
}
if($p===null || $p===""){
	die("phone required");
}

#2.连接到数据库
require('init.php');

#3.提交SQL
$sql = "UPDATE xz_user SET user_name='$n',gender='$g',email='$e',phone='$p' WHERE uid=$u";
$result = mysqli_query($conn,$sql);

#4.输出执行结果  DML: 失败-false  成功-true
if($result===false){
	echo "修改失败！请检查SQL: $sql";
}else {
	//如果要修改uid不存在，算执行成功！
	echo "语句执行成功!<br>";
	$c = mysqli_affected_rows($conn);
	echo "修改操作影响的行数：$c";
}


