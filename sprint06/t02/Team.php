<?php

class Team {
    public $id = 0;
    public $avengers = [];

    public function __construct($id, $avengers)
    {
        $this->id = $id;
        $this->avengers = $avengers;
    }

    public function battle($damage) {
        foreach ($this->avengers as $avenger) {
            $avenger->hp -= $damage;
            if ($avenger->hp <= 0) {
                unset($this->avengers[array_search($avenger, $this->avengers)]); 
            }
        }        
    }

    public function calculate_losses($cloned_team) {
        $count_dies = count($cloned_team->avengers) - count($this->avengers);

        echo ($count_dies == 0) ? "We haven't lost anyone in this battle!\n" : 
                    "In this battle we lost " . $count_dies . " Avenger(s).\n";
    }

}
