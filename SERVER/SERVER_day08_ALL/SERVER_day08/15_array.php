<?php
/*
使用一个变量保存5个学生的年龄
*/

$ageList = [18, 25, 19, 23, 20];

#echo $ageList;  //PHP中不能直接echo数组！数组到字符串的转换是禁止的！
echo $ageList[0];
echo "&nbsp;&nbsp;";
echo $ageList[2];
echo "&nbsp;&nbsp;";
echo $ageList[3];

$ageList[3] = 24;
echo "&nbsp;&nbsp;";
echo $ageList[3];




















