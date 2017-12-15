<?php
/*if判定
创建一个变量保存用户登录名，用户登录密码；若用户名为'dingding'且密码为'123456'，提示“欢迎回来：xxx”,否则提示“用户名或密码有误”。
*/
$uname = 'dingding';
$upwd = '123';

if($uname==='dingding' && $upwd==='123456'){
	echo "欢迎回来: $uname";
}else{
	echo "用户名或密码输入有误";
}
