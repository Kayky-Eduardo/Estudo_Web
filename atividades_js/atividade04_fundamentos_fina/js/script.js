// CONTROLE DE TAREFAS
let tarefas = [];
let entrada = prompt("Deseja adicionar uma tarefa na sua lista de tarefas(Y/N): ");
entrada = entrada.toLowerCase().trim();

function validacaoData(data) {
    try {
        let validacao_data = data.replace(" ", "T");
        let nova_data = new Date(validacao_data);
        let agora =  new Date()

        if (isNaN(nova_data.getTime()) || nova_data <= agora) {
            alert("Data inválida.")
            return false;
        }
        return true

    } catch(erro) {
        console.log(erro)
    }

}

function adicionarTarefa() {
    let nome_tarefa = prompt("Digite o nome da tarefa: ");
    let descricao_tarefa = prompt("Digite uma descrição para a tarefa: ");
    let data_tarefa = prompt("Digite uma data e hora para esta tarefa(YYYY-MM-DD HH:MM:SS): ");

    if (!nome_tarefa || !descricao_tarefa) {
        alert("Algum dado não foi passado de forma correta.");
        return
    }

    if (validacaoData(data_tarefa)){
        let nova_tarefa = {
            nome_tarefa: nome_tarefa,
            descricao_tarefa: descricao_tarefa,
            data_tarefa: data_tarefa,
        };
        tarefas.push(nova_tarefa);
    } else {
        console.log("Data inválida!");
        return
    }  
}

function exibirTarefas() {
    let agora = new Date();
    console.log("Lista de Tarefas:");
    tarefas.forEach(function(tarefa, indice){
        let nova_data = tarefa.data_tarefa.replace(" ", "T");
        nova_data = new Date(nova_data);

        let tempo_restante = nova_data.getTime() - agora.getTime();

        let dia_restante = Math.floor(tempo_restante / (1000 * 24 * 60 * 60));
        let horas_restantes = Math.floor(tempo_restante % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        let minutos_restantes = Math.floor((tempo_restante % (1000 * 60 * 60)) / (1000 * 60));
        let segundos_restantes = Math.floor((tempo_restante % (1000 * 60)) / 1000);
        
        let status = tempo_restante <= 0 ? "Expirado" : "Dentro do prazo";

            console.log(`Tarefa ${indice + 1}`);
            console.log(`Nome da Tarefa: ${tarefa.nome_tarefa}`);
            console.log(`Descricao da Tarefa: ${tarefa.descricao_tarefa}`);
            console.log(`Data da Tarefa: ${tarefa.data_tarefa}`);
            console.log(`Tempo restante: ${dia_restante}`);
            console.log(`${horas_restantes} Horas ${minutos_restantes} Minutos ${segundos_restantes} Segundos`);
            console.log(`Status: ${status}`);
            console.log('---------------------------------------');
            console.log("");     
    })
};


if (entrada == "y") {
    let escolha_opcoes;
    while (escolha_opcoes != "3") {
        escolha_opcoes = prompt("1. Adicionar tarefa\n2. Exibir tarefas\n3. Sair");
        escolha_opcoes = escolha_opcoes.toLowerCase().trim();

        if (escolha_opcoes == "1" || escolha_opcoes == "adicionar tarefa") {
            adicionarTarefa();
        } else if (escolha_opcoes == "2" || escolha_opcoes == "exibir tarefas") {
            console.clear();
            exibirTarefas();
        } else if (escolha_opcoes == "3" || escolha_opcoes == "sair") {
            break;
        }
    }
} else if (entrada == "n"){
    alert("Progama encerrado");
} else {
    alert("Digite um valor válido.");
}