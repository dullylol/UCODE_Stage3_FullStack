<?php
header( "Content-Type: text/html; charset=utf-8" );
if ($_COOKIE["counter"]) {
    setcookie("counter", $_COOKIE["counter"] + 1, $_COOKIE["expirationTime"] + 60);
} else {
    setcookie("counter", 1, time() + 60);
    setcookie("expirationTime", time(), time() + 60);
}
$counter = $_COOKIE["counter"];

?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Cookie counter</title>

</head>

<body>
    <h1>Cookie counter</h1><br>

    <?php
        echo "This page was loaded <b>$counter</b> time(s) in last minute"
    ?>

</body>

</html>
