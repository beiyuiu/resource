<?php
//算术运算符
#算术运算符
/*创建变量，描述场景：买苹果本5000三台，加联想本4000二台，使用100元优惠券，最后总价商家可以打八折，用户决定分期(12期)付款，请计算每月的还款额*/

$applePrice = 5000;
$appleCount = 3;
$lenovoPrice = 4000;
$lenovoCount = 2;
$coupon = 100;		//优惠券
$discount = 0.8;	//折扣率
$month = 12;		//分期期数

//echo "每月还款额： $applePrice*$appleCount"; //每月还款额： 5000*3
echo "每月还款额：";
echo ($applePrice*$appleCount + $lenovoPrice*$lenovoCount - 100)*$discount / $month;
 
