<?php

class Controller
{
    private $user; 

    public function getUser() {
        return $this->user;
    }

    public function singUp($name, $email, $login, $password, $confirmed_password)
    {
        if ($password != $confirmed_password) {
            return "Password mismatch!";
        }
        $user = new User($name, $email, $login, $password);
        $this->user = $user;

        $usersDB = new UsersDatabase("users");

        if (!$usersDB->find($login)) {
            $usersDB->save($user);
            return "ok";
        } else {
            return "User with such username already exist!";
        }

    }

    public function singIn($login, $password)
    {
        $usersDB = new UsersDatabase("users");

        $user = $usersDB->find($login);
        $this->user = $user;

        if (!$user) {
            return "No such user!";
        } else if ($user->password != $password) {
            return "Incorrect password!";
        } else {
            return "ok";
        }
    }

    public function remindPassword($login)
    {
        $usersDatabase = new UsersDatabase("users");
        $user = $usersDatabase->find($login);
        $this->user = $user;

        if ($user) {
            $email = $user->email;
            mail($email, "Password reminder", "Your password:  $user->password\n");
        }
        else {
            return "No such user!";
        }
    }


}