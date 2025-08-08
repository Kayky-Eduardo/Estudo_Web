async function buscarDadosDeAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Dados recebidos!");
            } else {
                reject("Erro na requisição!\nTente novamente!");
            }
        }, 5000);
    });
}

async function executarBusca() {
    try {
        console.log(await buscarDadosDeAPI());
    } catch (erro) {
        console.log(erro);
    }
}

executarBusca();