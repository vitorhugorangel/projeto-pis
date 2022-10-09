Feature('Cadastro de Tarefas');

Scenario('Realizar o cadastro de uma tarefa com descrição e duração válidos', ({ I }) => {

    I.amOnPage('');
    I.fillField('#descricao', 'Ler um livro');
    I.fillField('#duracao', 20);
    I.click('#cadastrar');
    I.see('Tarefa cadastrada com sucesso!')

});

Scenario('Não realizar o cadastro de uma tarefa com descrição menor que 2 caracateres', ({ I }) => {

    I.amOnPage('');
    I.fillField('#descricao', 'L');
    I.fillField('#duracao', 20);
    I.click('#cadastrar');
    I.see('Erro ao cadastrar tarefa.')

});

Scenario('Não realizar o cadastro de uma tarefa com descrição maior que 100 caracateres', ({ I }) => {

    I.amOnPage('');
    I.fillField('#descricao', 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolor');
    I.fillField('#duracao', 20);
    I.click('#cadastrar');
    I.see('Erro ao cadastrar tarefa.')

});

Scenario('Não realizar o cadastro de uma tarefa com duração inferior a 1 minuto', ({ I }) => {

    I.amOnPage('');
    I.fillField('#descricao', 'Ler um livro');
    I.fillField('#duracao', 0.9);
    I.click('#cadastrar');
    I.see('Erro ao cadastrar tarefa.')

});