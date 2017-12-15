<?php
/*
创建变量，比较下面数值的大小：
1和true     	1和'1'	 true和'1'
'a'和'b'	    	'a'和'A'	 '中'和'国'		1和null	  null和null
*/
$num1 = 51;
$result1 = $num1 % 2  ===  0;
echo "$num1 是偶数吗： $result1 ";
$result2 = $num1 % 2  ===  1;
echo "$num1 是奇数吗： $result2 ";

echo "<hr>";

$price = 5000;
$result3 = $price>6888;
echo "商品涨价了吗：$result3";
$result4 = $price<6888;
echo "商品降价了吗：$result4";