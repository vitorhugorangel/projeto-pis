<?php

class ConnectMySQL
{
    public $pdo;

    function __construct()
    {
        try {
            $this->pdo = new PDO('mysql:dbname=tarefasbd;host=localhost:3306', 'root', '', [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
            ]);

            echo 'Deu certo';
        } catch (PDOException $e) {
            $this->visao->exibirErroAoConectar($e->getMessage());
        }
    }

    public function getConnection()
    {
        return $this->pdo;
    }
}
