// CONTROLE DE TAREFAS
let tarefas = [];
let entrada = prompt("Deseja adicionar uma tarefa na sua lista de tarefas(Y/N): ");
entrada = entrada.toLowerCase()


function adicionarTarefa(nome_tarefa, descricao_tarefa, data_tarefa) {
    let nova_tarefa = {
        nome_tarefa: nome_tarefa,
        descricao_tarefa: descricao_tarefa,
        data_tarefa: data_tarefa,
    };
    tarefas.push(nova_tarefa);
}

function exibirTarefas() {
    let agora = new Date();
    agora.da
    console.log("Lista de Tarefas:");
    tarefas.forEach(function(tarefa, indice){
        let nova_data = tarefa.data_tarefa.replace(" ", "T");
        nova_data = new Date(nova_data);
        let tempo_restante = new Date(nova_data.getTime() - agora.getTime());
        let dia_restante = Math.floor( tempo_restante / (1000 * 24 * 60 * 60));
        let horas_restantes = Math.floor(tempo_restante - dia_restante * 1000 * 60 * 60 * 24 / (1000 * 60 * 60) )
        console.log(`Tarefa ${indice + 1}`);
        console.log(`Nome da Tarefa: ${tarefa.nome_tarefa}`);
        console.log(`Descricao da Tarefa: ${tarefa.descricao_tarefa}`);
        console.log(`Data da Tarefa: ${tarefa.data_tarefa}`);
        console.log(`Tempo restante:\nDias restantes: ${dia_restante}\nHoras restantes: ${horas_restantes}`)
        console.log('---------------------------------------');
        console.log("");
    })
};

if (entrada == "y") {
    while (entrada != "3") {
        let escolha_opcoes = prompt("1. Adicionar tarefa\n2. Exibir tarefas\n3. Sair")
        escolha_opcoes = escolha_opcoes.toLowerCase();
        entrada = escolha_opcoes;

        if (escolha_opcoes == "1" || escolha_opcoes.trim() == "adicionar tarefa") {
            try {
                let nome_tarefa = prompt("Digite o nome da tarefa: ");
                let descricao_tarefa = prompt("Digite uma descrição para a tarefa: ")
                let data_tarefa = prompt("Digite uma data e hora para esta tarefa(YYYY-MM-DD HH:MM:SS): ");  
                adicionarTarefa(nome_tarefa, descricao_tarefa, data_tarefa);
                } catch(erro) {
                    console.log(erro.message);
                }
        } else if (escolha_opcoes == "2" || escolha_opcoes.trim() == "exibir tarefas") {
            console.clear();
            exibirTarefas();
        } else if (escolha_opcoes == "3" || escolha_opcoes.trim() == "Sair");
    }
} else if (entrada == "n"){
    alert("Progama encerrado");
} else {
    alert("Digite um valor válido.")
}