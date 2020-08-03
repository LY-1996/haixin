<?php
header('content-type:text/html;charset=utf8');
//连接数据库
$link = mysqli_connect('localhost', 'root', '', 'shuju');
//设置编码
mysqli_set_charset($link, 'utf8');
//获取参数信息
$u = $_GET['username'];
$p = $_GET['password'];

//SQL
$sql = "select * from user1 where name='$u' and pass='$p'";
//执行SQL
$result = mysqli_query($link, $sql);
//判断结果集中是否存在数据
if (mysqli_fetch_row($result)) {
    setcookie('login1', $u, time() + 3600);
    echo '1';
} else {
    echo '0';
}
