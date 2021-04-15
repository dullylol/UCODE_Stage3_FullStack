<?php

class UsersDatabase extends DatabaseModel
{
    private $user = null;

    public function getUser()
    {
        return $this->user;
    }


    public function __construct($table)
    {
        parent::__construct($table);
    }

    public function __destruct()
    {
        $this->databaseConnection = null;
    }

    public function save($user)
    {
        $this->user = $user;
        try {
            if ($this->user && $this->databaseConnection->getConnectionStatus()) {
                $request = "SELECT * FROM $this->table WHERE login=\"$user->login\";";
                $preparedRequest = $this->databaseConnection->connection->prepare($request);
                $preparedRequest->execute();
                $pdo = $preparedRequest->fetch(PDO::FETCH_ASSOC);
                if (!$pdo) {
                    $newRequest =   "INSERT INTO $this->table (name, email, login, password, games_count)
                                    VALUES (\"$user->name\", \"$user->email\", \"$user->login\", \"$user->password\", \"$user->gamesCount\");";

                    $this->databaseConnection->connection->prepare($newRequest)->execute();
                    return "insert";
                }
                else {
                    $newRequest = "UPDATE $this->table SET name = \"$user->name\", email = \"$user->email\", password = \"$user->password\", games_count = \"$user->gamesCount\" WHERE login = \"$user->login\"";
                    $this->databaseConnection->connection->prepare($newRequest)->execute();
                    return "update";
                }
            }
        } catch (PDOException $e) {
            echo "<script>alert('User with this username already exist!')</script>";
        }

        return false;
    }

    public function delete($login)
    {
        $this->user = null;
        
        try {
            if ($this->databaseConnection->getConnectionStatus()) {
                $request = "SELECT * FROM $this->table WHERE login=\"$login\"";
                $preparedRequest = $this->databaseConnection->connection->prepare($request);
                $preparedRequest->execute();
                $pdo = $preparedRequest->fetch(PDO::FETCH_ASSOC);
                if ($pdo) {
                    $newRequest = "DELETE FROM $this->table WHERE login=\"$login\"";
                    $this->databaseConnection->connection->prepare($newRequest)->execute();
                    return true;
                }

            }
        } catch (PDOException $e) { }

        return false;
    }

    public function find($login)
    {
        try {
            if ($this->databaseConnection->getConnectionStatus()) {
                $request = "SELECT * FROM $this->table WHERE login=\"$login\"";
                $preparedRequest = $this->databaseConnection->connection->prepare($request);
                $preparedRequest->execute();
                $pdo = $preparedRequest->fetch(PDO::FETCH_ASSOC);
                if ($pdo) {
                    $this->user = new User($pdo["name"], $pdo["email"], $pdo["login"], $pdo["password"], $pdo["games_count"]);
                    return $this->user;
                }
            }
        } catch (PDOException $e) { }
        return null;
    }

}
