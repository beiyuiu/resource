<?php
/**
 练习：计算1+2+3...100的总和
*/

$i = 1;
$sum = 0;

while( $i<=100 ){
	$sum += $i;
	$i++;
}

echo $sum;

