<?php

/*
新建php页面，使用常量保持圆周率π。再使用程序分别计算30度角和20度角对应的弧度是多少？

公式：  弧度值   =  角度值 * PI / 180 ;
*/
const  PI  = 3.1415926;

$jiaoDuZhi = 30;			#角度值
$huDuZhi = $jiaoDuZhi * PI / 180;	#弧度值

echo $huDuZhi;

echo "<hr>";

$jiaoDuZhi = 20;			#角度值
$huDuZhi = $jiaoDuZhi * PI / 180;	#弧度值

echo $huDuZhi;


?>