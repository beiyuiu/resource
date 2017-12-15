<?php
/*
 练习：创建一个变量表示年份，页面中输出这个年份是否为闰年。
*/

//$year = 2000;
//$year = 2004;
$year = 3000;

$isLeapYear = 
	( ($year%4===0)&&($year%100!=0) ) 
	|| 
	($year%400===0);
echo "$year 是闰年吗：$isLeapYear";