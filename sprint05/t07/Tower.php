<?php

class Tower extends Building
{
    private $elevator = false;
    private $arc_capacity = 0;
    private $height = 0;

    public function hasElevator() : bool
    {
        return $this->elevator;
    }

    public function getArcCapacity() : int
    {
        return $this->arc_capacity;
    }

    public function getHeight() : float
    {
        return $this->height;
    }

    public function setElevator($elevator)
    {
        $this->elevator = $elevator;
    }

    public function setArcCapacity($arc_capacity)
    {
        $this->arc_capacity = $arc_capacity;
    }

    public function setHeight($height)
    {
        $this->height = $height;
    }

    public function getFloorHeight() : float 
    {
        return $this->height / $this->floors;
    }

    public function toString() : string
    {
        $props = ["Floors : " . $this->floors,
            "Material : " . $this->material,
            "Address : " . $this->address,
            "Elevator : " . (($this->elevator) ? "+" : "-"),
            "Arc reactor capacity : " . $this->arc_capacity,
            "Height : " . $this->height,
            "Floor height : " . $this->getFloorHeight(),
        ];

        $str = "";

        foreach ($props as $p) {
            $str = $str . $p . "\n";
        }

        return $str;
    }
}
