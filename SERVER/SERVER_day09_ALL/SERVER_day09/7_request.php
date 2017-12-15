<?php
/*
PHP系统预定义变量
练习：客户端通过浏览器地址栏向服务器发送两个数据，num1和num2，PHP服务器接收到两个数据，在页面中输出它们的和
*/

echo "This is 7.php";
echo "<hr>";

#var_dump($_REQUEST);
$n1 = $_REQUEST['num1'];   #接收客户端提交的请求数据
$n2 = $_REQUEST['num2'];   #接收客户端提交的请求数据
$sum = $n1 + $n2;
echo $sum;

