<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Show other sites</title>
</head>
<body>
    <h1>Show other sites</h1>

    <form action="index.php" method="post">
        <input type="text" name="input_url" placeholder="url">
        <input type="submit" name="go" value="go">
        <a href="index.php">BACK</a>
    </form>

    <br>
    <style type="text/css">
        #output_label {
            display: block;
            border-top: 1px solid black; 
            border-bottom: 1px solid black;
            padding-top: 5px;
            padding-bottom: 5px;
            width: 100%;
        }
    </style>
    <?php

    if ($_POST) {
        echo '<label id="output_label">url: ' . $_POST["input_url"] . "</label><br>";

        $html = file_get_contents($_POST["input_url"]);

        $body = explode("<body", $html)[1];
        $body = explode("</body>", $body)[0];

        $body = "<body" . $body . "\n</body>";

        $body = str_replace("<", "&lt", $body);
        $body = str_replace(">", "&gt", $body);

        echo "<pre>" . $body . "</pre>";


    }
    else {
        echo "<label>Type an URL...</label>";
    }

    ?>

</body>
</html>