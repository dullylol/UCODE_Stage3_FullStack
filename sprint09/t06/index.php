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

// post requests
if ($_POST) {
    if ($_POST["sign_up"]) {
        $result = Controller::singUp(
            $_POST["name"],
            $_POST["email"],
            $_POST["login"],
            $_POST["password"],
            $_POST["confirmed_password"]
        );

        if ($result == "user") {
            $_SESSION["status"] = "main_user";
        } else if ($result == "admin") {
            $_SESSION["status"] = "main_admin";
        } else {
            echo "<script>alert('$result')</script>";
            $_SESSION["status"] = "registration";
        }
    }
    if ($_POST["sign_in"]) {
        $result = Controller::singIn(
            $_POST["login"],
            $_POST["password"]
        );

        if ($result == "user") {
            $_SESSION["status"] = "main_user";
        } else if ($result == "admin") {
            $_SESSION["status"] = "main_admin";
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
        Controller::remindPassword($_POST["login"]);
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
    case "main_admin":
        (new View("./view/templates/main_admin.html"))->render();
        break;
    case "main_user":
        (new View("./view/templates/main_user.html"))->render();
        break;
    default:
        (new View("./view/templates/login.html"))->render();
        break;
}

