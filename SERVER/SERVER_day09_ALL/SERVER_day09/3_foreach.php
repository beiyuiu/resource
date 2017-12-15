<?php
/*
练习：创建一个索引数组，保存5个笔记本厂家名称，使用for循环打印出所有数据；再使用foreach循环打印数据。	
*/
$arr = ['联想', '索尼', '明基', '戴尔'];

for($i=0; $i<count($arr); $i++){	
	echo $i.$arr[$i]."<br>";
}

echo "<hr>";

foreach($arr  as  $v){
	echo $v."<br>";
}

echo "<hr>";

foreach($arr  as  $k=>$v){
	echo $k.$v."<br>";
}