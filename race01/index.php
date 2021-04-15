<?php
session_start();

require_once "view/View.php";
require_once "controller/Controller.php";
require_once "model/connection/DatabaseConnection.php";
require_once "model/DatabaseModel.php";
require_once "model/User.php";
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
            $controller->addGame($_POST["login"]);
        } else {
            echo "<script>alert('$result')</script>";
            $_SESSION["status"] = "login";
        }
        $_SESSION["current_user"] = $_POST["login"];
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
        $gameActivity->replace("#GAMES_PLAYED#", $controller->getUser()->gamesCount);
        $gameActivity->replace("#OPENED#", "bot_" . rand(1, 1000));
        $gameActivity->render();
        break;
    default:
        (new View("./view/templates/login.html"))->render();
        break;
}
