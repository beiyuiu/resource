<?php
/*
练习：创建一个函数，maxNum()，可以接收5个数字做参数，函数体中获取这5个数字中的最大值，并输出。调用此函数2次。 
*/
function maxNum($n1, $n2, $n3, $n4, $n5){
	$result = $n1;    #用$result保存最大的值
	if($n2>$result){
		$result = $n2;
	}
	if($n3>$result){
		$result = $n3;
	}
	if($n4>$result){
		$result = $n4;
	}
	if($n5>$result){
		$result = $n5;
	}
	#echo $result;
	return $result;
}

$a = maxNum(10, 5, 8, 30, 20);
echo $a;

$b = maxNum(9, 1, 10, 2, 3);
echo $b;