<?php

abstract class Model
{

    protected $connection;
    protected $table;

    public function __construct($table)
    {
        $this->setConnection();
        $this->setTable($table);
    }

    protected function setTable($table)
    {
        $this->table = $table;
    }

    protected function setConnection()
    {
        // if you cannot connect to server, you should change password to my_sqli_native_password
        $this->connection = new DatabaseConnection("127.0.0.1", null, "odehtiarov", "securepass", "ucode_web");
    }

    abstract public function find($id);

    abstract public function delete();

    abstract public function save();

}