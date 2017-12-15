<?php
/*
创建一个函数：arrAvg($arr)，接收数组做参数，返回其中所有数字的平均值。形参$arr内容形如： [10, 5, 20, 8, 17]
*/
function arrAvg( $arr ){
	#求所有数字的总和   0  1  2  ...  c-1
	$sum = 0;
	foreach($arr  as  $v){
		$sum += $v;
	}

	#计算平均值
	$avg = $sum / count($arr);		
	
	#返回计算结果
	return  $avg;
}

$a1 = arrAvg( [1, 3, 5] );
echo $a1;

$a1 = arrAvg( [1, 3, 5, 7, 9] );
echo $a1;