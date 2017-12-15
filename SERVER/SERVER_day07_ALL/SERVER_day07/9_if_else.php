<?php
/*if判定
创建变量保存用户的政治面貌($zzmm=1)：
	1-党员、2-团员、3-群众、其它	

*/
$zzmm = 1;		#政治面貌

if($zzmm===1){
	echo "党员";
}else{
	if($zzmm===2){
		echo "团员";
	}else{
		if($zzmm===3){
			echo "群众";
		}else{
			echo "其它";
		}
	}
}
