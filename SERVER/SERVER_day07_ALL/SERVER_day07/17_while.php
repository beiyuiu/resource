<?php
/**
计算2+4+6+8...98的和	
*/

$i=2;
$sum = 0;

while($i<=98){
	$sum += $i;
	$i+=2;	
}

echo $sum;