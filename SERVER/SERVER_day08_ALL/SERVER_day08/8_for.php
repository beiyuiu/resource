<?php

/*
使用while计算1+3+5+...99的和
*/


/*
$i = 1;
$sum = 0;
while($i<100){
	$sum += $i;
	$i+=2;
}
echo $sum;
*/

/*
使用for计算1+3+5+...99的和
*/

for( $i=1,$sum=0;  $i<100;  $i+=2){
	$sum += $i;
}
echo $sum;

