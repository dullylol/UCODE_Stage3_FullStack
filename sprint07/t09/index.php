<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Marvel API</title>
</head>
<body>

<h1>Comics from Marvel API</h1>

<?php

// to get keys register on the site developer.marvel.com
$time = time();
$public = "public_key";
$hash = md5($time . "private_key" . $public);

$ch = curl_init("http://gateway.marvel.com/v1/public/comics?ts=$time&apikey=$public&hash=$hash");

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_HEADER, false);

$html = curl_exec($ch);
curl_close($ch);

$json = json_decode($html, true);

?>

<?php
function parseJSON($json)
{
    echo "<div class='data_lvl1'>";

    foreach ($json as $key => $value) {
        if (!is_array($value)) {
            echo "<div class='data_lvl2'>$key: <span>" . $value . "</span></div>";
        } 
        else {
            echo "<p class='header'>" . $key . "</p>";
            parseJSON($json[$key]);
        }
    }
    echo "</div>";
}

parseJSON($json);

?>

</body>

</html>
