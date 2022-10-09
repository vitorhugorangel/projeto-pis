<?php

$pdo = null;

try {
    $pdo = new PDO('mysql:dbname=tarefasbd;host=localhost:3306', 'root', '', [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]);
} catch (PDOException $e) {
    throw new RuntimeException($e->getMessage());
}
