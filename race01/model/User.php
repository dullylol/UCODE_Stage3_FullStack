<?php

class User
{
    public $name;
    public $email;
    public $login;
    public $password;
    public $wins;
    public $loses; 

    public function __construct($name, $email, $login, $password, $wins = 0, $loses = 0)
    {
        $this->name = $name;
        $this->email = $email;
        $this->login = $login;
        $this->password = $password;
        $this->wins = $wins;
        $this->loses = $loses;
    }

    public function __toString()
    {
        return "{\nname: $this->name;
            \nname: $this->email;
            \nemail: $this->login;
            \npassword: $this->password;\n
            \nwins: $this->password;\n
            \nloses: $this->password;\n
        }";
    }
}