<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Make square image</title>
</head>
<body>

<div class="center">
    <h1>Make square image</h1>
    <form action="index.php" method="post">
        <input name="image_url" placeholder="Image url..." size="40"><br><br>
        <input type="submit" value="GO">
    </form>
</div>
<?php

define("FILENAME", "image");

function getExtencion($url) {
    return(array_pop(explode(".", $url)));
}

function createImage($url) {
    $extencion = getExtencion($url);
    $imageOriginal = null;
    if ($extencion == "png") {
        $imageOriginal = imagecreatefrompng($url);
    }
    else if ($extencion == "jpeg" || $extencion == "jpg") {
        $imageOriginal = imagecreatefromjpeg($url);
    }


    if (imagesx($imageOriginal) > imagesy($imageOriginal)) {
        $imageOriginal = imagecrop(
            $imageOriginal,
            array(
                "x" => (imagesx($imageOriginal) - imagesy($imageOriginal)) / 2,
                "y" => 0,
                "width" => imagesy($imageOriginal),
                "height" => imagesy($imageOriginal)
            )
        );
    }
    else {
        $imageOriginal = imagecrop(
            $imageOriginal,
            array(
                "x" => 0,
                "y" => (imagesy($imageOriginal) - imagesx($imageOriginal)) / 2,
                "width" => imagesx($imageOriginal),
                "height" => imagesx($imageOriginal)
            )
        );
    }
    return $imageOriginal;

}

function saveImage($url, $resource, $color = "-original") {
    $extencion = getExtencion($url);
    $descriptor = 0;

    if ($extencion == "png") {
        $descriptor = fopen(FILENAME . $color . ".png", "w");
        imagepng($resource, FILENAME . $color . ".png");
    }
    else if ($extencion == "jpeg") {
        $descriptor = fopen(FILENAME . $color . ".jpeg", "w");
        imagejpeg($resource, FILENAME . $color . ".jpeg");
    }
    else if ($extencion == "jpg") {
        $descriptor = fopen(FILENAME . $color . ".jpg", "w");
        imagejpeg($resource, FILENAME . $color . ".jpg");
    }

    fclose($descriptor);
}

?>


<?php
    if ($_POST) {
        $imageOriginal = createImage($_POST["image_url"]);

        saveImage($_POST["image_url"], $imageOriginal);
        

        $imageRed = createImage($_POST["image_url"]);
        imagefilter($imageRed, IMG_FILTER_COLORIZE, 256, 0, 0);
        saveImage($_POST["image_url"], $imageRed, "-red");

        $imageGreen = createImage($_POST["image_url"]);
        imagefilter($imageGreen, IMG_FILTER_COLORIZE, 0, 256, 0);
        saveImage($_POST["image_url"], $imageGreen, "-green");

        $imageBlue = createImage($_POST["image_url"]);
        imagefilter($imageBlue, IMG_FILTER_COLORIZE, 0, 0, 256);
        saveImage($_POST["image_url"], $imageBlue, "-blue");


        imagedestroy($imageOriginal);
        imagedestroy($imageRed);
        imagedestroy($imageGreen);
        imagedestroy($imageBlue);
    }

?>

<?php

if ($_POST) {
    $extencion = getExtencion($_POST["image_url"]);
    echo '<div class="row">';
        echo '<div class="column">';
            echo '<img src="image-original.' . $extencion . '" alt="No photo! Incorrect URL!">';
        echo '</div>';
        echo '<div class="column">';
            echo '<img src="image-red.' . $extencion . '" alt="No photo! Incorrect URL!">';
        echo '</div>';
    echo '</div>';
    echo '<div class="row">';
        echo '<div class="column">';
            echo '<img src="image-green.' . $extencion . '" alt="No photo! Incorrect URL!">';
        echo '</div>';
        echo '<div class="column">';    
            echo '<img src="image-blue.' . $extencion . '" alt="No photo! Incorrect URL!">';
        echo '</div>';
    echo '</div>';
}

?>
    
</body>
</html>