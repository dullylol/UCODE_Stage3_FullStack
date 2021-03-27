<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>A new set</title>
</head>

<body>
    <h2>Superhero Form</h2>

    <?php
        $arrayPost = ["name" => $_POST["name"],
            "email" => $_POST["e-mail"],
            "age" => $_POST["age"],
            "description" => $_POST["info"],
            "photo" => $_POST["photo"]
        ];

        if ($arrayPost["name"] == "") {}
        else {
            echo "<fieldset style=\"background: lightgray;\"><h3>POST</h3>";
            echo "<pre>";
            print_r($arrayPost);
            echo "</pre>";
            echo "</fieldset>";
        }
    ?>

    <form action="index.php" method="post">

        <fieldset>
            <fieldset>
                <legend>About the Superhero</legend>

                    <label>Name</label>
                    <input type="text" name="name" placeholder="Tell your name" required>

                    <label>E-mail</label>
                    <input type="text" name="e-mail" placeholder="Tell your e-mail" required>

                    <label>Age</label>
                    <input type="number" name="age" min="1" max="999" step="1" required>
                    <br><br>

                    <label>About</label>
                    <textarea type="text" name="info" maxlength="500" rows="5" cols="70" 
                            placeholder="Tell about yourself, max 500 symbols" required></textarea>
                    <br><br>

                    <label>Photo:</label>
                    <input type="file" name="photo" id="choose">

            </fieldset>

            <br>
            <input type="reset">
            <input type="submit">

        </fieldset>

    </form>


</body>

</html>
