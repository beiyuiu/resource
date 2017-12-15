<?php
/*
PHP系统预定义变量
客户端通过浏览器地址栏向服务器发送两个数据，uname和upwd，PHP服务器接收到两个数据，判断若用户名为dingding，密码为123456，就在页面中输出“登录成功”；否则就输出“用户名或密码错误” 
*/

echo "8.php - 用户登录";
echo "<hr>";

#var_dump($_REQUEST);
#获取客户端请求提交给服务器的数据
$n = $_REQUEST['uname'];				#15:15
$p = $_REQUEST['upwd'];

if( $n==='dingding' && $p==='123456'){
	echo "登录成功";
}else {
	echo "用户名或密码错误";
}
