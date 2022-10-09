export class Tarefa {

    descricao: string;
    duracao: number;

    constructor() {
        this.descricao = '';
        this.duracao = 0;
    }

    verificaTamanhoDescricao(descricao: string): boolean {
        if (descricao !== '' && descricao.length >= 2 && descricao.length <= 100) return true;
        else return false;
    }

    verificaDuracaoTarefa(duracao: number): boolean {
        if (duracao >= 1) return true;
        else return false;
    }
}