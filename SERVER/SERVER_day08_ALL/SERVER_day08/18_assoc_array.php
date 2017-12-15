<?php
/*
关联数组的使用
*/
$laptop = [ 'lname'=>'戴尔', 'price'=>9500 ];

#$laptop[] = true;
$laptop['isOnsale'] = true;

#echo count($laptop);
#var_dump($laptop);

#echo $laptop[0];  关联数组元素下标不是0/1/2...不能使用for循环遍历
echo $laptop['lname'];
echo $laptop['price'];