<?php

class User
{
    public $name;
    public $email;
    public $login;
    public $password;
    public $gamesCount; 

    public function __construct($name, $email, $login, $password, $gamesCount = 0)
    {
        $this->name = $name;
        $this->email = $email;
        $this->login = $login;
        $this->password = $password;
        $this->gamesCount = $gamesCount;
    }

    public function __toString()
    {
        return "{\nname: $this->name;
            \nname: $this->email;
            \nemail: $this->login;
            \npassword: $this->password;\n
            \ngames_count: $this->gamesCount;\n
        }";
    }
}