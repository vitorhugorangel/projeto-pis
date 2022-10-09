import { Tarefa } from './tarefa';

window.addEventListener('load', () => {
    document.getElementById('cadastrar')?.addEventListener('click', cadastrar);
})

const tarefa = new Tarefa();

function cadastrar(ev: Event) {

    ev.preventDefault();

    alert('aopa')

    // const descricao = String(
    //     (document.getElementById('descricao') as HTMLInputElement)?.value);

    // const duracao = Number((
    //     document.getElementById('duracao')! as HTMLInputElement)?.value);

    // if (tarefa.verificaDuracaoTarefa(duracao) === true && tarefa.verificaTamanhoDescricao(descricao) === true) {

    //     enviarBanco();

    //     return;

    // } else {
    //     document.getElementById('saida')!.innerText = 'Campos incorretos.';
    //     return;
    // }

}

function enviarBanco() {


    const descricao = String(
        (document.getElementById('descricao') as HTMLInputElement)?.value);

    const duracao = Number((
        document.getElementById('duracao')! as HTMLInputElement)?.value);

    const payload = new FormData();

    payload.append('descricao', descricao);
    payload.append('duracao', String(duracao));

    fetch('http://127.0.0.1:8080', {
        method: 'POST',
        body: payload,
    })
        .then(res => {
            document.getElementById('saida')!.innerText = 'Tarefa cadastrada com sucesso!';
        })
        .catch(data => {
            document.getElementById('saida')!.innerText = 'Erro ao cadastrar tarefa.';
        })

}
