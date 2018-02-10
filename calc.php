<?php
$a;
$op;
$b;
$res;
if (isset($_GET['a']) && isset($_GET['op']) && isset($_GET['b']))
{
	$a = $_GET['a'];
	$op = $_GET['op'];
	$b = $_GET['b'];	
	switch ($op)
	{
		case 'p': $res = $a + $b; break;
		case '-': $res = $a - $b; break;
		case '*': $res = $a * $b; break;
		case '/': $res = $a / $b; break;
	}
}
else
{
	$a = 0;
	$op = 'p';
	$b = 0;
	$res = 0;
}
?>
<!DOCTYPE html>
<html lang='en'>
	<head>
		<meta charset='UTF-8'>
		<title>Calc</title>
	</head>
	<body>
		<form action = 'calc.php' method='get'>
			<input type='text' name='a' value="<?php echo $a; ?>"> <p>
			<input type='text' name='op' value="<?php echo $op; ?>"> <p>
			<input type='text' name='b' value="<?php echo $b; ?>"> <p>
			<input type='text' name='res' value="<?php echo $res; ?>"> <p>
			<input type='submit' value='Click'/>
		</form>
	</body>
</html>