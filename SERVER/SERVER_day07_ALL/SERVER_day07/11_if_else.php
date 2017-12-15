<?php
/**
*创建一个变量保存一个高考成绩，假设600分以上可以上一本、*500分以上可以上二本、400分以上可以上三本、300分以上可以上*专科、否则只能复读
*/
$score = 350;
$result = null;

if($score>=600){
	$result = '一本';
}else if($score>=500){
	$result = '二本';
}else if($score>=400){
	$result = '三本';
}else if($score>=300){
	$result = '专科';
}else{
	$result = '请再来一遍';
}

echo "可以上的学校：$result";
