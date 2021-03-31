<?php session_start() ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WhoIsWho</title>
</head>
<body>
    <h1>Parsing CSV data</h1>


    <form method="post">
        <label>Upload file: </label>
        <input type="file" name="choose_file" value="Choose file">
        <input type="submit" name="Upload" value="Upload">
    </form>

    <br>

    <?php
    if ($_POST["choose_file"] || $_SESSION["choose_file"]) {

        echo '<form method="get">
            <label>Filter:</label>
            <select name="filter">';
            if ($_GET["filter"]) {   
                if ($_GET["filter"] == "NOT SELECTED") { 
                    echo '<option selected value="NOT SELECTED">NOT SELECTED</option>';
                }
                else {
                    echo '<option value="NOT SELECTED">NOT SELECTED</option>';
                }
                if ($_GET["filter"] == "good") { 
                    echo '<option selected value="good">good</option>';
                }
                else {
                    echo '<option value="good">good</option>';
                }
                if ($_GET["filter"] == "bad") { 
                    echo '<option selected value="bad">bad</option>';
                }
                else {
                    echo '<option value="bad">bad</option>';
                }
                if ($_GET["filter"] == "-") { 
                    echo '<option selected value="-">-</option>';
                }
                else {
                    echo '<option value="-">-</option>';
                }
                if ($_GET["filter"] == "neutral") { 
                    echo '<option selected value="neutral">neutral</option>';
                }
                else {
                    echo '<option value="neutral">neutral</option>';
                }
            }
            else {
                echo '<option value="NOT SELECTED">NOT SELECTED</option>
                <option value="good" selected>good</option>
                <option value="bad">bad</option>
                <option value="-">-</option>
                <option value="neutral">neutral</option>';
            }
        echo   '</select>
            <input type="submit" name="apply" value="APPLY">
        </form>';

        $filter = "NOT SELECTED";
        if ($_GET["filter"]) {
            $filter = $_GET["filter"];
        }

    //===========================table==============================
        if ($_POST["choose_file"]) {
            $_SESSION = Array();
        }
        if (!$_SESSION["choose_file"]) {
            $_SESSION["choose_file"] = $_POST["choose_file"];
        }

        $descriptor = fopen($_SESSION["choose_file"], "r");

        echo '<table border="1">';

        if ($str_csv = fgetcsv($descriptor)) {
            echo '<tr>';
            foreach($str_csv as $line) {
                echo '<th>' . $line . "</th>";
            }
            echo '</tr>';
        }

        while ($str_csv = fgetcsv($descriptor)) {
            if (($filter == "good" && $str_csv[2] != "good") ||
                ($filter == "bad" && $str_csv[2] != "bad") ||
                ($filter == "-" && $str_csv[2] != "-") ||
                ($filter == "neutral" && $str_csv[2] != "neutral")) {
                continue;
            }

            echo '<tr>';
            foreach($str_csv as $line) {
                echo '<td>' . $line . "</td>";
            }
            echo '</tr>';
        }

        echo '</table>';

        fclose($descriptor);
    }

    ?>

</body>
</html>