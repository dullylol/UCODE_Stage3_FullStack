<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notepad mini</title>
</head>
<body>

<h1>Notepad mini</h1>

<form method="post">
    <input type="text" name="name" placeholder="Name"><br><br>
    <select name="importance"><br><br>
        <option>low</option>
        <option>medium</option>
        <option>high</option>
    </select><br><br>
    <textarea name="text" placeholder="Text of note..."></textarea><br><br>
    <input type="submit" name="create" value="create">
</form>

<?php
    function autoload($pClassName) {
        include(__DIR__. '/' . $pClassName. '.php');
    }
    spl_autoload_register("autoload");

    define("FILENAME", "nodes");

    $descriptor = fopen(FILENAME, "c");

    $JSON_str = file_get_contents(FILENAME);
    $notes = null;

    if ($JSON_str) {
        $notes = json_decode(unserialize($JSON_str));
        print_r($notes);
    }
    else {
        $notes = array();
    }

    if ($_POST) {
        $note = new Note($_POST["name"], $_POST["importance"], $_POST["text"]);
        array_push($notes, $note);
        file_put_contents(FILENAME, json_encode(serialize($notes)));
    }
    
    $notePad = new NotePad($notes);

    fclose($descriptor);
?>

<h2>List of notes</h2>

<?php
    echo $notePad;
?>

</body>
</html>
