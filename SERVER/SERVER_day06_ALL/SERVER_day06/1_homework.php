<?php

$lid = 103;
$title = "Apple MacBook";	
$img = 'img/103.png';
$price = 5699.00;
$promis = '24小时发货';
$spec = '黑色 8G 12G';
$stockCount = 1020;
//$shelfTime = 1500123456789;
$shelfTime = time() * 1000;   //获取当前的系统时间
//$isOnsale = 0;
$isOnsale = false;

//var_dump($isOnsale);

//echo '编号：';
//echo $lid;

//echo '编号：' . $lid;
//echo '编号：$lid';
//echo "编号：$lid";

echo "编号：$lid<br>主标题：$title<br>上架时间：$shelfTime<br>是否特价：$isOnsale";
//注意：双引号中的变量名会被转换为对应的变量值！
