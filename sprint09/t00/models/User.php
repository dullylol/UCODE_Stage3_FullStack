<?php

class User
{
    public $name;
    public $email;
    public $login;
    public $password;
    public $status;

    public function __construct($name, $email, $login, $password, $status = false)
    {
        $this->name = $name;
        $this->email = $email;
        $this->login = $login;
        $this->password = $password;
        $this->status = $status;
    }

    public function __toString()
    {
        return "{\nname: $this->name;\nname: $this->email;\nemail: $this->login;\npassword: $this->password;\nstatus: $this->status\n}";
    }
}