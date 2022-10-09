export class Tarefa {
    constructor() {
        this.descricao = '';
        this.duracao = 0;
    }
    verificaTamanhoDescricao(descricao) {
        if (descricao !== '' && descricao.length >= 2 && descricao.length <= 100)
            return true;
        else
            return false;
    }
    verificaDuracaoTarefa(duracao) {
        if (duracao >= 1)
            return true;
        else
            return false;
    }
}
