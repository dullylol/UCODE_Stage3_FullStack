<?php
session_start();
?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hack it!</title>
    </head>
    <body>
        <h2>Password</h2>
    

<?php
if (!$_POST || $_POST["reset_session"]) {
    $_SESSION = array();
    echo '
        <form action="index.php" method="post">
            <label>Password not saved at session.</label><br>
            <label>Password for saving to session</label>
            <input type="text" name="password" placeholder="Password to session"><br>
            <label>Salt for saving to session</label>
            <input type="text" name="salt" placeholder="Salt to session"><br>
            <input type="submit" name="save" value="Save">
        </form>
    ';
}
else if (!$_POST["check_password"]) {
    $password = $_POST["password"];

    $salt = $_POST["salt"];

    $_SESSION["password"] = $password;
    $_SESSION["salt"] = $salt;
    $_SESSION["hash"] = $hash;

    $hash = md5(htmlspecialchars($password) . $salt);

    echo '
        <form action="index.php" method="post">
            <label>Password saved at session.</label><br>
            <label>Hash is </label>
    ' 
    . $hash . 
    '
    <br><label>Try to guess</label>
            <input type="text" name="check_password" placeholder="Password to session">
            <input type="submit" value ="Check password"><br>
            <input type="submit" name="reset_session" value="Clear">
        </form>
    ';
}
else {
    if ($_POST["check_password"] == $_SESSION["password"]) {
        echo '
            <form action="index.php" method="post">
                <label style="color: green;">Hacked!</label><br><br>
                <label>Password not saved at session.</label><br>
                <label>Password for saving to session</label>
                <input type="text" name="password" placeholder="Password to session"><br>
                <label>Salt for saving to session</label>
                <input type="text" name="salt" placeholder="Salt to session"><br>
                <input type="submit" name="save" value="Save">
            </form>
        ';
    }
    else {
        echo '
            <form action="index.php" method="post">
                <label style="color: red;">Access denied!</label><br><br>
                <label>Password not saved at session.</label><br>
                <label>Password for saving to session</label>
                <input type="text" name="password" placeholder="Password to session"><br>
                <label>Salt for saving to session</label>
                <input type="text" name="salt" placeholder="Salt to session"><br>
                <input type="submit" name="save" value="Save">
            </form>
        ';
    }
}

?>
          
</body>
</html>
