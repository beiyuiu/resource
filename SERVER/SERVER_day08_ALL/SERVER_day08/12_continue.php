<?php
/*
练习：计算1+2+3+4+6+7+8+9+10+11+12+13+14+16+...99
  跳过所有以5结束的数字：5/15/25/35....
*/
$sum = 0;

for($i=1; $i<100; $i++){
	if($i%10===5){
		continue;
	}
	$sum += $i;
}
echo $sum;

