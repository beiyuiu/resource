<?php
/*
创建变量，比较下面数值的大小：
1和true     	1和'1'	 true和'1'
'a'和'b'	    	'a'和'A'	 '中'和'国'		1和null	  null和null
*/
var_dump( 1 == true );		//隐式转换：true=>1
var_dump( 1 == '1' );		//隐式转换：'1'=>1
var_dump( 1 === '1' );		//不会隐式转换
var_dump( true == '1' );	//隐式转换：true=>1、'1'=>1
var_dump( true === '1' );	//不会隐式转换

var_dump( 'a' < 'b' );	//比较两个字符的编码  97 < 98
var_dump( 'a' > 'A' );	//比较两个字符的编码  97 > 65
var_dump( '八' < '六' );	//比较两个字符的编码   > 
var_dump( 0 == null );	//隐式转换：null=>0
var_dump( null == null );	//注意：PHP中的null和null相等的！JS中不是这样的！