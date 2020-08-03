<?php
header("Access-Control-Allow-Origin:*");
header('content-type:text/html;charset=utf8');
//获取数据
$k = $_GET['keyword'];

$arrContextOptions = array(
    "ssl" => array(
        "verify_peer" => false,
        "verify_peer_name" => false,
    ),
);

$res = file_get_contents(
    "https://www.hisense.com/api/hisense/search/item/suggest?size=10&keyword=$k&_=1595396815429",
    false,
    stream_context_create($arrContextOptions)
);

echo $res;
?>
