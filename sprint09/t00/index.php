<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="res/styles/style.css">
    <title>Registration</title>
</head>
<body>

<div id="login-box" class="left">
    <h1>Registration</h1>

    <form action="index.php" method="post">
        <input type="text" name="name" id="name" placeholder="Full name" required/>
        <input type="text" name="email" id="email" placeholder="E-mail" required/>
        <input type="text" name="login" id="login" placeholder="Username" required/>
        <input type="password" name="password" id="password" placeholder="Password" required/>
        <input type="password" name="confirmed_password" id="confirmed_password" placeholder="Confirm password" required/>

        <input type="submit" name="signup" value="Sign up" />
    </form>
</div>

<?php
require_once("./models/DatabaseModel.php");
require_once("./models/User.php");
require_once("./models/UsersDatabase.php");
require_once("./connection/DatabaseConnection.php");

if ($_POST) {
    if ($_POST["password"] == $_POST["confirmed_password"]) {
        $usersDatabase = new UsersDatabase("users");
        $usersDatabase->save(new User($_POST["name"], $_POST["email"], $_POST["login"], $_POST["password"]));
    } else {
        echo "<script src='res/scripts/regError.js'></script>";
    }
}


?>

</body>
</html>