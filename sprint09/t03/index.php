<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple router</title>
</head>
<body>
    <h1>Simple router</h1>

    <?php

    if ($_GET) {
        require_once("Router.php");
        $router = new Router();
        $router->setParams();
        $router->printParams();
    }

    ?>

</body>
</html>