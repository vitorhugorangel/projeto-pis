--
-- ESTRUTURA DO BANCO DE DADOS
--

create database tarefasbd;

USE tarefasbd;

create table tarefa
(
    id INT NOT NULL PRIMARY KEY,
    descricao VARCHAR(100) NOT NULL,
    duracao int NOT NULL
);