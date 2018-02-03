<?php
$str = $_GET['str'];
$strId = $_GET['strId'];
$host='localhost';
$database='mydb';
$user='root';
$password='';

$link = mysqli_connect($host, $user, $password, $database) 
or die("Ошибка " . mysqli_error($link));

mysqli_set_charset($link, 'cp1251');

$query ="UPDATE PERSON SET ".$str." WHERE ID= ".$strId;
$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
if ($result) echo "Update in datBase...";
mysqli_close($link);
?>