<?php

class Controller
{
    public static function singUp($name, $email, $login, $password, $confirmed_password, $status = false)
    {
        if ($password != $confirmed_password) {
            return "Password mismatch!";
        }
        $user = new User($name, $email, $login, $password, $status);

        $usersDB = new UsersDatabase("users");

        if (!$usersDB->find($login)) {
            $usersDB->save($user);
        } else {
            return "User with such username already exist!";
        }

        return ($user->status) ? "admin" : "user";
    }

    public static function singIn($login, $password)
    {
        $usersDB = new UsersDatabase("users");

        $user = $usersDB->find($login);
        if (!$user) {
            return "User with such username already exist!";
        } else if ($user->password != $password) {
            return "User with such username already exist!";
        } else {
            return ($user->status) ? "admin" : "user";
        }
    }

    public static function remindPassword($login)
    {
        $usersDatabase = new UsersDatabase("users");
        $user = $usersDatabase->find($login);
        if ($user) {
            $email = $user->email;
            mail($email, "Password reminder", "Your password:  $user->password\n");
        }
        else {
            return "No such user!";
        }
    }


}