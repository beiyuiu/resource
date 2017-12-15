<?php
/*
创建一个二维数组，保存购物车所有的商品数据（一个购物车可以保存多条商品信息），每个商品需要记录：图片、标题、单价、数量、是否勾选；使用foreach的嵌套输出所有数据
*/
$cart = [
	['pic'=>'img/1.jpg', 'lname'=>'联想', 'price'=>5999, 'count'=>5, 'isChecked'=>true],
	['pic'=>'img/2.jpg', 'lname'=>'戴尔', 'price'=>6999, 'count'=>2, 'isChecked'=>false],
	['pic'=>'img/5.jpg', 'lname'=>'苹果', 'price'=>7999, 'count'=>1, 'isChecked'=>false]
];
#var_dump($cart);
foreach($cart  as  $laptop){
	#var_dump($laptop);
	#echo "<hr>";
	foreach($laptop as $k=>$v){
		echo "$k $v <br>";
	}
	echo "<hr>";
}