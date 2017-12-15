<?php
/*
价格打折：创建变量保存商品总价格：如果总金额>=100元，则享受八折。输出实际应收金额
*/
$price = 100;

//$price<100 || $price=$price*0.8;
//true || 不会执行 =>true
//false || 必须执行

$price>=100 && $price=$price*0.8;
//true && 必须执行
//false && 不会执行 => false


echo $price;