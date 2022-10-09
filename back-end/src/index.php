<?php

require './tarefa.php';

class ConnectMySQL
{
    public $pdo =  null;

    function __construct()
    {
        try {
            $this->pdo = new PDO('mysql:dbname=tarefasbd;host=localhost:3306', 'root', '', [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
            ]);
        } catch (Exception $e) {
            throw new RuntimeException($e->getMessage());
        }
    }

    public function getConnection()
    {
        return $this->pdo;
    }
}

if (empty($_POST)) {
    return;
}

$descricao = $_POST['descricao'];
$duracao = $_POST['duracao'];

$connect = new ConnectMySQL();

$pdo = $connect->getConnection();

$sql = 'INSERT INTO tarefa (descricao, duracao) VALUES (:descricao, :duracao)';

$statement = $pdo->prepare($sql);

$statement->execute([
    ':descricao' => $descricao,
    ':duracao' => $duracao,
]);

$publisher_id = $pdo->lastInsertId();

echo 'The publisher id ' . $publisher_id . ' was inserted';
