<?php
header('content-type:text/html;charset=utf8');
//连接数据库
$link=mysqli_connect('localhost','root','','');
//设置编码
mysqli_set_charset($link,'utf8');
//SQL语句
$sql='select * from goods';
//执行SQL，并返回结果集
$result=mysqli_query($link,$sql);
//创建存储数据的数组
$arr1=[];
//遍历结果集中的所有数据
while($row=mysqli_fetch_assoc($result)){
    //把遍历出来的数据追加到数组中
    array_push($arr1,$row);
}
//转为json字符串
echo json_encode($arr1);
?>