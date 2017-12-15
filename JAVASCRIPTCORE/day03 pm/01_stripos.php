<?php
$str="No zuo no die,No can no bibi";
$i=-1;
do{
  $i=stripos($str,"no",$i+1);
  if($i!==false){
    echo "在位置 $i 发现关键词<br>";
  }else break;
}while(true);