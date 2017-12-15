<?php
header("Content-Type:application/json");
require_once("./init.php");
$sql="select uid,uname,email,phone from xz_user";
echo json_encode(sql_execute($sql));