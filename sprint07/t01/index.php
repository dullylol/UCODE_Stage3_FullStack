
<?php

if ($_POST) {
    $checkboxes = [
        "chboxStrength" => $_POST["chboxStrength"],
        "chboxSpeed" => $_POST["chboxSpeed"],
        "chboxIntelligence" => $_POST["chboxIntelligence"],
        "chboxTeleportation" => $_POST["chboxTeleportation"],
        "chboxImmortal" => $_POST["chboxImmortal"],
        "chboxAnother" => $_POST["chboxAnother"],
    ];

    $checkboxesCount = 0;
    foreach ($checkboxes as $checkbox) {
        if ($checkbox == "on") {
            $checkboxesCount++;
        }
    }

    $superheroData = [
        "name" => $_POST["name"],
        "alias" => $_POST["alias"],
        "age" => $_POST["age"],
        "decription" => $_POST["about"],
        "photo" => $_POST["photo"],
        "experience" => $checkboxesCount,
        "level" => $_POST["range"],
        "purpose" => $_POST["radio"],
    ];

    echo "<h1>Session for new</h1>";

    echo "name: " . $superheroData["name"] . "<br>";
    echo "alias: " . $superheroData["alias"] . "<br>";
    echo "</pre>age: " . $superheroData["age"] . "<br>";
    echo "decription: " . $superheroData["decription"] . "<br>";
    echo "photo: " . $superheroData["photo"] . "<br>";
    echo "experience: " . $superheroData["experience"] . "<br>";
    echo "level: " . $superheroData["level"] . "<br>";
    echo "purpose: " . $superheroData["purpose"] . "<br>";

    echo '<br><form>
        <fieldset>
            <input type="submit" value="FORGET">
        </fieldset>
    </form>';

} else {
    echo '
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Session for new</title>
</head>
<body>

<h2 id="main_header">Session for new</h2>
    <form action="index.php" method="post">
        <fieldset class="border">

            <fieldset class="border">
                <legend>About HERO</legend>

                    <label>Real Name</label>
                    <input type="text" name="name" placeholder="Superhero real name">
                    <label>Current Alias</label>
                    <input type="text" name="alias" placeholder="Superhero alias">
                    <label>Age</label>
                    <input type="number" name="age" min="1" max="999" step="1">
                    <br><br>
                    <label>About</label>
                    <textarea type="text" name="about" maxlength="500" rows="5" cols="70" placeholder="Information about superhero, max 500 symbols"></textarea>
                    <br><br>
                    <label>Photo:</label>
                    <input type="file" name="photo" id="choose">

            </fieldset>

            <fieldset class="border">
                <legend>Powers</legend>

                    <input name="chboxStrength" type="checkbox">
                    <label>Strength</label>
                    <input name="chboxSpeed" type="checkbox">
                    <label>Speed</label>
                    <input name="chboxIntelligence" type="checkbox">
                    <label>Intelligence</label>
                    <input name="chboxTeleportation" type="checkbox">
                    <label>Teleportation</label>
                    <input name="chboxImmortal" type="checkbox">
                    <label>Immortal</label>
                    <input name="chboxAnother" type="checkbox">
                    <label>Another</label>
                    <br><br>
                    <label>Level of control:</label>
                    <input name="range" type="range" min="0" max="10" step="1">

            </fieldset>

            <fieldset class="border">
                <legend>Publicity</legend>

                    <input name="radio" value="0" type="radio">
                    <label>UNKNOWN</label>
                    <input name="radio" value="1" type="radio">
                    <label>LIKE A GHOST</label>
                    <input name="radio" value="2" type="radio">
                    <label>I AM IN COMICS</label>
                    <input name="radio" value="3" type="radio">
                    <label>I HAVE FUN CLUB</label>
                    <input name="radio" value="4" type="radio">
                    <label>SUPERSTAR</label>

            </fieldset>

            <br>

            <input type="reset" value="CLEAR"/>
            <input type="submit" value="SEND"  onclick="hideMainForm()"/>

        </fieldset>

    </form>



</body>
</html>
';
}

?>