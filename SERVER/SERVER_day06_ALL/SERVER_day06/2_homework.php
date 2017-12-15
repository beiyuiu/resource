<?php

#创建一个字符串变量，用于保存一个订单总金额；
//$priceSum = 250;
$priceSum = '250';

#将上述变量值+10
//echo $priceSum . '10';		#string('25010')
//echo $priceSum + '10';		#int(260)

#echo $priceSum + 'A10';		#int(250)  'A10'=>0			
#echo $priceSum + '1A0';		#int(251)  '1A0'=>1			
#echo $priceSum + '10A';		#int(260)  '10A'=>10			
#echo $priceSum + '10.5A';		#int(260.5) '10.5A'=>10.5			
echo $priceSum + '10.5.8A';		#int(260.5) '10.5.8A'=>10.5			