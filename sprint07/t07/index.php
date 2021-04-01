<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data to XML</title>
</head>
<body>
<h1>Avenger Quote to XML</h1>

<?php
    function autoload($pClassName) {
        include(__DIR__. '/' . $pClassName. '.php');
    }
    spl_autoload_register("autoload");

    $avengerQuote1 = new AvengerQuote(1, "Tony Stark", "Hello", [
        "href1",
        "href2",
        "href3"
    ]);
    $avengerQuote1->addComment("Good");
    $avengerQuote1->addComment("Comment");
    $avengerQuote1->addComment("Hi!");

    $avengerQuote2 = new AvengerQuote(2, "Banner", "Good bye", [
        "href1",
        "href2"
    ]);
    $avengerQuote2->addComment("WoooooooooW");
    $avengerQuote2->addComment("MMMMMMMM");

    $avengerQuote3 = new AvengerQuote(3, "Thor Odinson", "I know", [
        "href1",
        "href2",
        "href3"
    ]);
    $avengerQuote3->addComment("Prrrrrrrrrrr");
    $avengerQuote3->addComment("bbbbrrrrrrrrrr");

    $avengerQuote4 = new AvengerQuote(3, "Loki", "gigigiigigig", [
        "href1",
        "href2"
    ]);
    $avengerQuote4->addComment("God of troubles");
    $avengerQuote4->addComment("God of double troubles");

    $listAvengerQuote = new ListAvengerQuotes();
    $listAvengerQuote->addAvengerQuote($avengerQuote1);
    $listAvengerQuote->addAvengerQuote($avengerQuote2);
    $listAvengerQuote->addAvengerQuote($avengerQuote3);
    $listAvengerQuote->addAvengerQuote($avengerQuote4);

    // work with xml
    $listAvengerQuote->toXML("file.xml");

    echo '<table border="1"><tr>';

    echo '<td><pre>'; 
    print_r($listAvengerQuote); 
    echo '</pre></td>';

    echo '<td><pre>'; 
    print_r($listAvengerQuote->fromXML("file.xml"));
    echo '</pre></td>';

    echo '</tr></table>';

?>

</body>
</html>