import { Tarefa } from './tarefa';
window.addEventListener('load', () => {
    var _a;
    (_a = document.getElementById('cadastrar')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', cadastrar);
});
const tarefa = new Tarefa();
function cadastrar(ev) {
    ev.preventDefault();
    alert('aopa');
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
    var _a, _b;
    const descricao = String((_a = document.getElementById('descricao')) === null || _a === void 0 ? void 0 : _a.value);
    const duracao = Number((_b = document.getElementById('duracao')) === null || _b === void 0 ? void 0 : _b.value);
    const payload = new FormData();
    payload.append('descricao', descricao);
    payload.append('duracao', String(duracao));
    fetch('http://127.0.0.1:8080', {
        method: 'POST',
        body: payload,
    })
        .then(res => {
        document.getElementById('saida').innerText = 'Tarefa cadastrada com sucesso!';
    })
        .catch(data => {
        document.getElementById('saida').innerText = 'Erro ao cadastrar tarefa.';
    });
}
