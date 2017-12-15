<?php
/**
  练习：使用do...while...计算1*3*5*7*...15	
*/

$i = 1;
$chengJi = 1;   #总的乘积

do{
	$chengJi *= $i;
	$i += 2;
}while( $i<=15 );
/*
while( $i<=15 ){
	$chengJi *= $i;
	$i += 2;
}*/
echo $chengJi;








