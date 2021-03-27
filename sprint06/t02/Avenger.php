<?php

class Avenger {
    public $name = "";
    public $alias = "";
    public $gender = "";
    public $age = 0;
    public $power = [];
    public $hp = 0;

    public function __construct($name, $alias, $gender, $age, $power, $hp)
    {
        $this->name = $name;
        $this->alias = $alias;
        $this->gender = $gender;
        $this->age = $age;
        $this->power = $power;
        $this->hp = $hp;
    }

    public function __invoke()
    {
        echo strtoupper($this->alias) . "\n";
        foreach ($this->power as $p) {
            echo $p . "\n";
        }
        echo "\n";
    } 

    public function __toString() {
        return  "name: " . $this->name . "\n" . 
                "gender: " . $this->gender . "\n" . 
                "age: " . $this->age . "\n";
    }

    public function __clone()
    {
        return new Avenger($this->name, $this->alias, 
            $this->gender, $this->age, $this->power, $this->hp);
    }

}