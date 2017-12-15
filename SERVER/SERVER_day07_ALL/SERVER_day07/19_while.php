<?php
/**
从1+2+3....+N一直加下去，直到总和加到刚超过10000时，停止，那时的N是几？
*/
/*
$i=0;
$sum = 0;					 

while( $sum<10000 ){		// 10011<10000
	$i++;					// $i=> 142
	$sum += $i;				// $sum += 141;  => 10011
}
echo $i;	#141
echo $sum;	#10011
*/


$i = 0;
$sum = 0;

while( true ){		//死循环 + break
	$i++;
	$sum += $i;
	//当$sum超过10000,打断当前循环的执行——break
	if($sum>=10000){
		break;
	}
}

echo $i;
echo $sum;









