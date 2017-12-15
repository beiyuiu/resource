<?php
/**
创建一个变量保存一个订单的付款方式，可能值如下：
1-在线支付  2-货到付款  3-支付宝支付  4-京东白条   其它方式
根据变量的整数值输出对应的中文说明字符  (1)if..else  (2)switch..case
*/

$payment = 2;
$result = null;

/*
if($payment===1){
	$result = '在线支付';
}else if($payment===2){
	$result = '货到付款';
}else if($payment===3){
	$result = '支付宝支付';
}else if($payment===4){
	$result = '京东白条';
}else {
	$result = '未知方式';
}
*/

switch($payment){
	case 1:
		echo '在线支付';
		break;
	case 2:
		echo '货到付款';
		break;
	case 3:
		echo '支付宝支付';
		break;
	case 4:
		echo '京东白条';
		break;
	default:
		echo '未知方式2';
}
#echo $result;

echo "<hr>";














