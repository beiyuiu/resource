<?php
/*
练习：创建一个二维数组，保存3个员工的信息，每个员工都有编号、姓名、工资、生日、是否在岗等属性，输出所有数据
[ [],[],[] ]

*/
$empList = [
	['eid'=>205, 'ename'=>'TOM', 'salary'=>5500, 'birthday'=>15021345678900, 'isOnDuty'=>false],
	['eid'=>305, 'ename'=>'MARY', 'salary'=>6500, 'birthday'=>15121345678900, 'isOnDuty'=>true],
	['eid'=>405, 'ename'=>'JOE', 'salary'=>7500, 'birthday'=>15221345678900, 'isOnDuty'=>false]
];
#var_dump($empList);
for($i=0; $i<count($empList); $i++ ){
	//echo $empList[$i]['ename'];
	$emp = $empList[$i];
	echo "编号：$emp[eid] 姓名：$emp[ename] 工资：$emp[salary] 生日：$emp[birthday] 在岗否：$emp[isOnDuty]<br>";
}