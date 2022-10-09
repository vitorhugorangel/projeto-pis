<?php

class Tarefa
{
    public $descricao = '';
    public $duracao = 0;

    public function __construct(
        $descricao,
        $duracao
    ) {
        $this->descricao = $descricao;
        $this->duracao = $duracao;
    }

    public function validaDescricao()
    {
        if ($this->descricao !== '' && strlen($this->descricao) >= 2 && strlen($this->descricao) <= 100) return true;
        else return false;
    }

    public function validaDuracao()
    {
        if ($this->duracao < 1) return false;
        else return true;
    }
}
