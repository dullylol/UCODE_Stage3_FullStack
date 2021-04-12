<?php
session_start();

require_once "view/View.php";
require_once "controller/Controller.php";
require_once "model/connection/DatabaseConnection.php";
require_once "model/DatabaseModel.php";
require_once "model/User.php";
require_once "model/Card.php";
require_once "model/Hero.php";
require_once "model/UsersDatabase.php";

if (!$_SESSION["status"]) {
    $_SESSION["status"] = "login";
}

$_SESSION["status"] = "login";
$controller = new Controller();

// post requests
if ($_POST) {
    if ($_POST["sign_up"]) {
        $result = $controller->singUp(
            $_POST["name"],
            $_POST["email"],
            $_POST["login"],
            $_POST["password"],
            $_POST["confirmed_password"]
        );

        if ($result == "ok") {
            $_SESSION["status"] = "game";
        } else {
            echo "<script>alert('$result')</script>";
            $_SESSION["status"] = "registration";
        }
    }
    if ($_POST["sign_in"]) {
        $result = $controller->singIn(
            $_POST["login"],
            $_POST["password"]
        );

        if ($result == "ok") {
            $_SESSION["status"] = "game";
        } else {
            echo "<script>alert('$result')</script>";
            $_SESSION["status"] = "login";
        }
    }
    if ($_POST["go_to_sign_up"]) {
        $_SESSION["status"] = "registration";
    }
    if ($_POST["go_to_password_reminder"]) {
        $_SESSION["status"] = "password_reminder";
    }
    if ($_POST["go_to_sign_in"]) {
        $_SESSION["status"] = "login";
    }
    if ($_POST["sign_out"]) {
        $_SESSION["status"] = "login";
    }
    if ($_POST["remind_password"]) {
        $result = $controller->remindPassword($_POST["login"]);
        $_SESSION["status"] = "login";
    }
}

// render neccesary html-pages
switch ($_SESSION["status"]) {
    case "login":
        (new View("./view/templates/login.html"))->render();
        break;
    case "registration":
        (new View("./view/templates/registration.html"))->render();
        break;
    case "password_reminder":
        (new View("./view/templates/password_reminder.html"))->render();
        break;
    case "game":
        $gameActivity = new View("./view/templates/game.html");
        $gameActivity->replace("#USER#", $controller->getUser()->login);
        $gameActivity->replace("#WINS#", $controller->getUser()->wins);
        $gameActivity->replace("#LOSES#", $controller->getUser()->loses);
        $gameActivity->render();
        break;
    default:
        (new View("./view/templates/login.html"))->render();
        break;
}

/*
// game loop
function game($controller) {
    // start render
    $gameActivity = new View("./view/templates/game.html");
    $gameActivity->replace("#USER#", $controller->getUser()->login);
    $gameActivity->replace("#WINS#", $controller->getUser()->wins);
    $gameActivity->replace("#LOSES#", $controller->getUser()->loses);
    $gameActivity->render();

    // heroes
    $hero = new Hero(30);
    $enemy = new Hero(30);

    // cards pool
    // hero
    $myDeck = getNewDeck();
    shuffle($enemyDeck);
    $myHand = array();
    for ($i = 0; $i < 4; $i++) {
        array_push($myHand, $myDeck[count($myDeck) - 1]);
        array_pop($myDeck);
    }
    $myField = array();

    // enemy
    $enemyDeck = getNewDeck();
    shuffle($enemyDeck);
    $enemyHand = array();
    for ($i = 0; $i < 4; $i++) {
        array_push($enemyHand, $enemyDeck[count($enemyDeck) - 1]);
        array_pop($enemyDeck);
    }
    $enemyField = array();

    // loop
    while (true) {
        // hero turn
        $seconds = 0;
        while ($seconds++ <= 30) {

            if ($_POST) {
                if ($_POST["card"]) {
                    foreach($myDeck as $key => $card) {
                        if ($card->name == $_POST["card"]) {
                            array_push($myField, $card);
                            unset($myDeck[$key]);
                            break;
                        }
                    }
                }
            }

            sleep(1000);
        }
        if ($hero->health <= 0) break;
        //enemy turn
        $seconds = 0;
        while ($seconds++ <= 30) {

            if ($_POST) {
                
            }

            sleep(1000);
        }
        if ($enemy->health <= 0) break;
    }
}


// additional functions

function getNewDeck() {
    return array(
        new Card("Iron Man", "path", 5, 4, 4),
        new Card("Hulk", "path", 10, 10, 8),
        new Card("Thanos", "path", 20, 20, 10),
        new Card("Black panther", "path", 3, 4, 3),
        new Card("Captain America", "path", 2, 5, 3),
        new Card("Socol", "path", 1, 2, 1),
        new Card("Black Widow", "path", 2, 1, 1),
        new Card("Thor", "path", 10, 15, 9),
        new Card("Loki", "path", 3, 3, 2),
    );
}

function render($gameActivity, $hero, $myDeck, $myHand, $myField, $enemy, $enemyDeck, $enemyHand, $enemyField) {
    $gameActivity->replace("#HAND_CARD1#", new View(""));
    $gameActivity->render();
}
*/