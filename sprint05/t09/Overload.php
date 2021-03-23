<?php

class Overload {

    private $data = array();

    public function __set ($name , $value) {
        $this->data[$name] = $value;
    }

    public function __isset ($name) : bool {
        $this->data[$name] = "NO SET";
        return true;
    }

    public function __get ($name) {
        if (array_key_exists($name, $this->data)) {
            return $this->data[$name];
        }
        else {
            return "NO DATA";
        }
    }

    public function __unset($name) {
        $this->data[$name] = NULL;
    }


}