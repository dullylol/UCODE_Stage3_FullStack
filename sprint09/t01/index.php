<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="res/styles/style.css">
    <title>Login</title>
    <script src="res/scripts/goToHtml.js"></script>
</head>
<body>

<div id="login-box" class="left">
    <h1>Login</h1>

    <form action="index.php" method="post">
        <input type="text" name="login" id="login" placeholder="Username" required/>
        <input type="password" name="password" id="password" placeholder="Password" required/>

        <input type="submit" name="signin" value="Sign in" />
    </form>
</div>

<?php
require_once("./models/DatabaseModel.php");
require_once("./models/User.php");
require_once("./models/UsersDatabase.php");
require_once("./connection/DatabaseConnection.php");

if ($_POST) {
    $usersDatabase = new UsersDatabase("users");
    $user = $usersDatabase->find($_POST["login"]);
    if ($user && $_POST["password"] == $user->password) {
        $status = ($user->status) ? "admin" : "user";
        echo "<script>goToHtml('res/html/$status.html')</script>";
    } else {
        echo "<script src='res/scripts/logError.js'></script>";
    }
}

?>

</body>
</html>