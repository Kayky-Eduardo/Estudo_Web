function notificacao(nome) {
    console.log(`o pedido ${nome} está pronto!`);
}

function processarPedido(produto, callback) {
    console.log("Processando o seu pedido.");
    setTimeout(() =>{ 
        console.log("Dados processados"),
        notificacao(`${produto}`)}, 5000);
}

processarPedido("pneu")

