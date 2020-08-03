<?php
header('content-type:text/html;charset=utf8');
//连接数据库
$link=mysqli_connect('localhost','root','','shuju');
//设置编码
mysqli_set_charset($link,'utf8');
//获取传入的参数
$u=$_GET['username'];
$p=$_GET['pass'];

//SQL语句
$sql="select * from user1 where name='$u' and pass='$p'";
//执行SQL
$result=mysqli_query($link,$sql);
//判断结果集是否存在数据
if($row=mysqli_fetch_row($result)){
    echo '1';  //表示数据库里有内容
}else{
    echo '0';
    $sql1="insert into user1(name,pass) values('$u','$p')";
    $result1=mysqli_query($link,$sql1);
}
?>