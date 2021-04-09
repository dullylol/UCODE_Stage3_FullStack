<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="res/styles/style.css">
    <title>Remind password</title>
</head>
<body>

<div id="login-box" class="left">
    <h1>Remind password</h1>

    <form action="index.php" method="post">
        <input type="text" name="login" id="login" placeholder="Username" required/>

        <input type="submit" name="remind_password" value="Remind password" />
    </form>
</div>

<?php
require_once("models/DatabaseModel.php");
require_once("models/User.php");
require_once("models/UsersDatabase.php");
require_once("connection/DatabaseConnection.php");

if ($_POST) {
    $usersDatabase = new UsersDatabase("users");
    $user = $usersDatabase->find($_POST["login"]);
    if ($user) {
        $email = $user->email;
        mail($email, "Password reminder", "Your password:  $user->password\n");
    } else {
        echo "<script src='res/scripts/remindError.js'></script>";
    }
}

?>

</body>
</html>