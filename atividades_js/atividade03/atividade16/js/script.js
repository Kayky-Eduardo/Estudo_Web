function coletarDados(callback){
    console.log("Coletando dados")
    setTimeout(() =>{ 
            console.log("Dados coletados");
            callback("Kayky", 18.7, exibirDados)},
            5000
    );
}

function processarDados(nome, idade, callback) {
    let dados = nome.toUpperCase();
    idade = idade.toFixed(0);
    callback(dados, idade);
}

function exibirDados(nome, idade){
    console.log(`nome: ${nome}\nidade: ${idade}`);
}

coletarDados(processarDados)