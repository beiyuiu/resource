<?php
/*if判定
创建一个变量，保存分页查询中用户想显示的页号，如果没有指定(null)或者指定了无效的值(小于等于0），就赋值为1，最后输出用户想显示的页号   
*/
$pageNum = -2;

if( $pageNum===null || $pageNum<=0 ){
	$pageNum = 1;
}

echo "要显示的页号：$pageNum";