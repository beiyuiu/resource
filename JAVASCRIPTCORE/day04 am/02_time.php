<?php
header("Content-Type:application/json");
$output=[
  "now"=>getdate()[0],
  "end"=>strtotime("2017/9/30 17:00")
];
echo json_encode($output);
