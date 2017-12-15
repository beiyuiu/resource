<?php
/*
创建一个数组，保存5个商品的价格，使用for循环输出每个价格；  
*/
$priceList = [ 2000, 1000, 5000, 3000, 3500 ];
#echo $priceList;  #语法错误
#var_dump($priceList);  适合于临时查看数据

/*
echo $priceList[0];
echo $priceList[1];
echo $priceList[2];
echo $priceList[3];
echo $priceList[4];
#echo $priceList[5];   运行错误！
*/
for($i=0; $i<5; $i++){
	echo $priceList[$i];
}

echo "<hr>";


/*
再试着给下标为0、1、4的商品的价格+10，再次使用for循环输出每个价格；
*/
$priceList[0] += 10;
$priceList[1] += 10;
$priceList[4] += 10;

echo count($priceList);
echo "<br>";

for($i=0; $i<count($priceList); $i++){
	echo $priceList[$i];
}