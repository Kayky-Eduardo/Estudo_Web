// Simula o carregamento de dados (assíncrono com setTimeout)
function carregarDados(callback) {
    console.log("...Carregamento dados...");
    /*
    O setTimeout() serve para executar uma função depois de um tempo determinado - ou seja,
    ele agenda a execução de algo no futuro, sem travar o restante do código.
    Sintaxe: setTimeout(funcao, tempoEmMilissegundos);
    */
    setTimeout(() => {
        const dados = ["Agata", "Coly", "Isis"];
        console.log(" Dados carregados.");
        callback(dados); // chama o callback com os dados
    }, 3000);
}

// função callback que processa os dados recebidos
function exibirDados(Lista) {
    console.log(" Lista de nomes:");
    Lista.forEach((nome, indice) => {
        console.log(`${indice + 1}. ${nome}`)
    })
}

// executando
carregarDados(exibirDados);