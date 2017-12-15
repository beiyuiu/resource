<?php
/*
练习：创建一个关联数组，保存一个用户的信息：编号、用户名、年龄、积分。使用foreach遍历每个数据。 
*/
$user = [
	'uid'=>101,
	'uname'=>'tom',
	'age'=>20,
	'score'=>559
];

foreach($user as $v){
	echo $v."<br>";
}

echo "<hr>";

foreach($user  as  $k=>$v){
	echo "$k $v <br>";
}