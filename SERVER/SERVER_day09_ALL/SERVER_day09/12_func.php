<?php
/*
练习：创建一个函数，add()，可以接收三个数字做参数，函数体中计算出这三个数字的和，并打印出来。调用次函数2次。
*/
#声明函数
function add( $chinese, $math, $english ){
	$sum = $chinese + $math + $english;
	echo $sum;
}

#调用函数
add(1, 1, 1);   #$chinese=1; $math=1; $english=1
add(100, 100, 100);#$chinese=100; $math=100; $english=100