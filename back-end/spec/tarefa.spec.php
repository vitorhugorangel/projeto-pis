<?php

require_once 'src/tarefa.php';

describe('Descrição da tarefa', function () {

    it('descrição deve conter entre 02 e 100 caracteres.', function () {
        $tarefa =  new Tarefa('tarefa de teste', 1);
        $result = $tarefa->validaDescricao();
        expect($result)->toBe(true);
    });

    it('descrição não deve conter menos de 02 caracteres.', function () {
        $tarefa =  new Tarefa('t', 1);
        $result = $tarefa->validaDescricao();
        expect($result)->toBe(false);
    });

    it('descrição não deve conter mais de 100 caracteres.', function () {
        $tarefa =  new Tarefa(' Lorem ipsum dolor sit amet, consectetur adipisci elit, 
        sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.', 1);
        $result = $tarefa->validaDescricao();
        expect($result)->toBe(false);
    });
});

describe('Duração da tarefa', function () {

    it('duração deve ser maior igual a 1.', function () {
        $tarefa =  new Tarefa('tarefa', 0);
        $result = $tarefa->validaDuracao();
        expect($result)->toBe(false);
    });

    it('duração não deve ser menor que 1.', function () {
        $tarefa =  new Tarefa('tarefa', 0);
        $result = $tarefa->validaDuracao();
        expect($result)->toBe(false);
    });
});
