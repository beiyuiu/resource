<?php
/*
练习：编写7.php，创建一个变量保存用户的登录名，赋值为'dingding'；再创建一个变量保存登录密码，赋值为'123456'；再创建一个变量保存用户头像图片路径，赋值为'img/u1.png'，输出上述用户相关的三个变量的值。	再次重新赋值上述三个变量，再次输出。
*/
$userName = 'dingding';
$userPwd = '000000';
$avatarUrl = 'img/u1.png';
/*
echo $userName;
echo '<br>';
echo $userPwd;
echo '<br>';
echo $avatarUrl;
*/
echo $userName . '<br>' . $userPwd . '<br>' . $avatarUrl;

echo '<hr>';

$userName = 'dangdang';
$userPwd = '123456';
$avatarUrl = 'img/u8.png';

echo $userName . '<br>' . $userPwd . '<br>' . $avatarUrl;

?>