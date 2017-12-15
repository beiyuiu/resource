<?php
/*
练习：创建一个函数，cartCalc()，接收一个商品单价、购买数量、折扣金额做参数，返回该商品应支付的总金额。 调用此函数2次，分别输出其返回值 
*/
function cartCalc( $price, $count, $discount){
	$sum = $price * $count - $discount;
	#echo $sum;
	return $sum;
}

$s = cartCalc(1000, 2, 100);
echo $s;

echo  cartCalc(2000, 3, 500);