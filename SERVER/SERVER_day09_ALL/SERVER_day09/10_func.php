<?php
/*
练习：创建一个函数，printStar()，其中在一行中输出10个※，执行此函数3次。
*/
#声明函数
function printStar( $num ){
	#for($i=0; $i<10; $i++){
	for($i=0; $i<$num; $i++){
		echo '※';
	}
	echo "<br>";
}

#执行函数
printStar(5);     #$num=5
printStar(20);	  #$num=20
printStar(15);
