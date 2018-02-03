<?php
$id = $_GET['id'];
$host='localhost';
$database='mydb';
$user='root';
$password='';

$link = mysqli_connect($host, $user, $password, $database) 
or die("Ошибка " . mysqli_error($link));

mysqli_set_charset($link, 'cp1251');

$query ="DELETE FROM PERSON WHERE ID = ".$id;
$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
if ($result) echo "Delete in datBase...";
mysqli_close($link);
?>