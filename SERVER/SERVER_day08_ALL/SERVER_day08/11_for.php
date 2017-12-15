<?php
/*
死循环 + break
计算1*2*3*4....得到一个乘积，第一次遇到乘积>=10000，立即退出；输出此时的乘积值
*/

$chengJi = 1;
$i = 1;

for( ; ; $i++){
	$chengJi *= $i;
	if($chengJi>=10000){
		break;
	}
}

echo $chengJi;


/*
for($i=1,$chengJi=1; $chengJi<10000; $i++){
	$chengJi*=$i;
}
*/