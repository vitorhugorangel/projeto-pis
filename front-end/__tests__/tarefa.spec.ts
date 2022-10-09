import { Tarefa } from '../app/src/tarefa'

const tarefa = new Tarefa();

describe('Descrição da tarefa', () => {
    it('descrição deve conter entre 02 e 100 caracteres.', () => {
        const result = tarefa.verificaTamanhoDescricao('te');
        expect(result).toEqual(true);
    });

    it('descrição não deve deve conter menos de 02 caracteres.', () => {
        const result = tarefa.verificaTamanhoDescricao('te');
        expect(result).toEqual(true);
    });

    it('descrição não deve conter mais de 100 caracteres.', () => {
        const result = tarefa.verificaTamanhoDescricao('te');
        expect(result).toEqual(true);
    });
})

describe('Duração da tarefa', () => {
    it('Duração deve conter ao menos 1 minuto.', () => {
        const result = tarefa.verificaDuracaoTarefa(2);
        expect(result).toEqual(true);
    })

    it('Duração não deve conter menos de 1 minuto.', () => {
        const result = tarefa.verificaDuracaoTarefa(0.9);
        expect(result).toEqual(false);
    })
})