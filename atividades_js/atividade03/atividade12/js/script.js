function mostrarHora() {
    let data = new Date();
    let horas = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
    return horas
}

function mostrarData() {
    let data = new Date();
    let data_atual = `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    return data_atual
}


function executarTarefas(funcao1, funcao2) {
    console.log(`Data atual: ${funcao1} ${funcao2}`);
}

executarTarefas(mostrarData(), mostrarHora());

