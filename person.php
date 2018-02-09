<?php
require "table_php.html";
$host='localhost';
$database='mydb';
$user='root';
$password='';


$link = mysqli_connect($host, $user, $password, $database) 
or die("Ошибка " . mysqli_error($link));

mysqli_set_charset($link, 'utf8');

$query ="SELECT * FROM person";
$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
echo "<table border='1'>
<tr><th>ID</th>
<th>fname</th>
<th>lname</th>
<th>age</th></tr>";
while($row = mysqli_fetch_array($result)) {
	echo "<tr>";
	echo "<td>" . $row['id'] . "</td>";
	echo "<td>" . $row['fname'] . "</td>";
	echo "<td>" . $row['lname'] . "</td>";
	echo "<td>" . $row['age'] . "</td>";
	echo "</tr>";
}
echo "</table>";

if (isset($_GET['create'])) {
	$query ="INSERT INTO PERSON VALUES ("."'" . $_GET['id'] . "','" . $_GET['fname'] . "','" .$_GET['lname'] . "','" . $_GET['age'] ."'".")";
	$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
	header("Location: person.php");
	if ($result) echo "Add in datBase.";
}
else if (isset($_GET['update'])) {
	$query ="UPDATE PERSON SET "."fname='" . $_GET['fname'] . "'," . "lname='" . $_GET['lname'] . "'," . "age=" . $_GET['age'] . " WHERE ID= ".$_GET['id'];
	$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
	header("Location: person.php");
	if ($result) echo "Update in datBase...";
}
else if (isset($_GET['delete'])) {
	$query ="DELETE FROM PERSON WHERE ID = ".$_GET['id'];
	$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
	header("Location: person.php");
	if ($result) echo "Delete in datBase...";
}
mysqli_close($link);
?>