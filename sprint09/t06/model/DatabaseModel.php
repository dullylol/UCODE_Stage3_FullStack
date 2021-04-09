<?php

abstract class DatabaseModel
{
    protected $databaseConnection;
    protected $table;

    public function __construct($table)
    {
        $this->setConnection();
        $this->setTable($table);
    }

    final protected function setConnection()
    {
        $this->databaseConnection = new DatabaseConnection("127.0.0.1", null, "odehtiarov", "securepass", "sword");
    }

    final protected function setTable($table)
    {
        $this->table = $table;
    }

    
}
