<?php
/*
练习：创建一个函数，printRect()，用※打印出方块，需要接收两个参数：$rows和$cols，据这两个参数打印出$rows行$cols列的方块。调用此函数3次
*/
#声明带参数的函数
function printRect( $rows, $cols ){
	for($i=0; $i<$rows; $i++){
		for($j=0; $j<$cols; $j++){
			echo "※";
		}
		echo "<br>";
	}
	echo "<hr>";
}
#调用函数
printRect(1, 10);   #$rows=1, $cols=10
printRect(3, 5);	#$rows=3, $cols=5
printRect(5, 20);

