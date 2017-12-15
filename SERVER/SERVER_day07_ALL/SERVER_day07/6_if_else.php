<?php
/*if判定
创建一个变量表示单价、表示数量、表示用户支付的金额；#1
计算商品总价，“如果总价>=500，则总价打八折”；#2
输出总价、找零金额	#3
*/
$price = 200;
$count = 3;
$payment = 100;		#已支付金额

$sum = $price * $count;	#商品总价

if($sum>=500){
	echo '执行打折计算';
	$sum = $sum*0.8;  //$sum *= 0.8;
}

echo "<br>总金额：$sum";

if($payment>=$sum){
  echo "<br>应找零：" . ($payment-$sum);
}else{
  echo "<br>已支付金额不足";
}

