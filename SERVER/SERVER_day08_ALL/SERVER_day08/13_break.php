<?php
/*
练习：输出2000年及以后的5个闰年年份	
*/

#思路:
#  $year记录年份  2000/2001/2002....
#  $count记录已经输出的闰年的个数   0/1/2/3/4/5 break

$year = 2000;
$count = 0;

for( ; ; $year++){
	if( ($year%4==0 && $year%100!=0)||($year%400==0) ){
		echo $year."&nbsp;&nbsp;";   //输出一个闰年
		$count++;  //又输出一个闰年，闰年计数器+1
		if($count>=5){   //已经输出够5个了
			break;
		}
	}
}

echo "<hr>";









