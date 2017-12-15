<?php
/*
学子商城中使用一个数字保存订单的状态：
1-等待付款、2-备货中、3-运输中、4-派送中、5-订单完成、其他状态
*/

$status = 8;
$result = null;

if($status===1){
	$result = '等待付款';
}else{
	if($status===2){
		$result = '备货中';
	}else{
		if($status===3){
			$result = '运输中';
		}else{
			if($status===4){
				$result = '派货中';
			}else{
				if($status===5){
					$result = '订单完成';
				}else{
					$result = '其它状态';
				}
			}
		}
	}
}

echo "订单状态：$result";


