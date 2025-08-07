function coletarDados(callback){
    console.log("Coletando dados")
    setTimeout(() =>{ 
    console.log("Dados coletados"),
    processarDados("Kayky", 18)},
    console.log("Os dados irão ser processados")
    , 5000);
}

function processarDados(nome, idade){
    exibirDados(nome, idade);
}
function exibirDados(){
    console.log(`nome: ${nome}\nidade: ${idade}`);
}

coletarDados(processarDados())