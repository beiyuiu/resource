<?php
/*
创建一个函数：arrMax($arr)，接收数组做参数，返回其中的最大值。形参$arr内容形如： [10, 5, 20, 8, 17]
*/
function arrMax( $arr ){
	//先假设数组中的第0个元素值最大
	$max = $arr[0];

	//依次再与后面的每个值相比较 1 2 3... c-1
	for($i=1; $i<count($arr); $i++){
		if( $arr[$i]>$max ){
			$max = $arr[$i];
		}
	}

	//返回执行结果
	return $max;
}


$m1 = arrMax( [10, 20, 30, 22, 25] );
echo $m1;

$m1 = arrMax( [100, 90, 80, 100, 50] );
echo $m1;



