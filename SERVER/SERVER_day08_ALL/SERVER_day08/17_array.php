<?php
/*
练习：创建一个数组，保存4个商品的名称，使用for循环输出每个商品的名称
*/
#$laptopArr = ['联想，戴尔，苹果，明基'];
$laptopArr = ['联想', '戴尔', '苹果', '明基'];

$laptopArr[4] = '小米';  
$laptopArr[count($laptopArr)] = '华为';
$laptopArr[] = '神州';  #在数组尾部添加新元素
#$laptopArr = 'SONY';   #把整个数组赋值为一个字符串

var_dump($laptopArr);
for($i=0; $i<count($laptopArr);  $i++){
	echo $i.$laptopArr[$i] . "&nbsp;&nbsp;";
}