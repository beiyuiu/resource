<?php
/*
克雷托指数：
  体重 / 身高的平方
  结果在20~25正常....
*/

$weight = 90;				//10:12
$height = 1.8;

$result = $weight / ($height*$height);
//echo $result;

$result = $result>25 ? '偏胖' : (
			 $result>=20 ? '正常' : '偏瘦'
		  );
echo $result;
