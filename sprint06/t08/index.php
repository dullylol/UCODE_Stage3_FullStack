<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>What about forms?</title>
</head>
<body>
    <h1>Who of the avengers the strongest?</h1><br>

    <form action="index.php" method="post">
        <div>
            <input type="radio" name="answer" value="1">
            <label>Hulk</label>
        </div>

        <div>
            <input type="radio" name="answer" value="2">
            <label>Thor</label>
        </div>

        <div>
            <input type="radio" name="answer" value="3">
            <label>Iron-man</label>
        </div>

        <div>
            <input type="radio" name="answer" value="4">
            <label>Spider-man</label>
        </div><br>

        <input type="submit" value="I know marvel!">
    </form><br>

    <?php
        $answer = $_POST["answer"];
        if (!$answer) {
            echo "<label></label>";
        }
        else if ($answer == "2") {
            echo "<label>Wow, you're Marvel's guru!</label>";
        }
        else {
            echo "<label>Go to watch films, NOOOOB!</label>";
        }
    ?>

</body>

</html>
