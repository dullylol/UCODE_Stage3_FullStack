<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Files</title>
</head>
<body>

    <h1>Files</h1>

    <form action="index.php" method="post">

        <label>File name:</label>
        <input type="text" name="file_name">
        <label>Content:</label>
        <textarea name="content"></textarea>
        <input type="submit" value="create file">

        <br>

    </form>

    <h2>List of files:</h2>

    <?php

    if ($_POST["delete-file"]) {
        unlink("tmp/" . $_GET["file"]);
        unset($_POST["delete-file"]);
        unset($_GET["file"]);
        echo '<script>window.location = window.location.href.split("?")[0];</script>';
    }

    ?>

    <?php
    function autoload($pClassName) {
        include(__DIR__. '/' . $pClassName. '.php');
    }
    spl_autoload_register("autoload");

    if ($_POST && $_POST["file_name"]) {
        $file = new File("tmp/" . $_POST["file_name"]);
        $file->write($_POST["content"]);
    }

    $list= new FilesList("tmp");
    echo $list->toList() . "\n";


    ?>


    <?php

    if ($_GET) {
        echo '<h2>Selected file: <i>"tmp/' . $_GET["file"] . '"</i></h2>';

        echo '<form method="post">
        <input type="submit" name="delete-file" value="Delete file">
        </form><br>';

        $file= new File("tmp/" . $_GET["file"]);
        echo $file->toList();
    }

    ?>



</body>
</html>