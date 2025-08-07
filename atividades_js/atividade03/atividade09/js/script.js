function tipoOperacao () {
    let operacao = prompt("Digite qual operação você deseja fazer(soma, subtração, mutiplicação): ");
    if (operacao === null || operacao.trim() === "") {
        alert("Digite uma resposta válida!");
    } else {
    return operacao.toLowerCase();
    }
}


function executarOperacao(n1, n2, callback) {
    if (callback === "mutiplicação") {
        let mutiplicacao = n1 * n2;
        console.log(`O resultado de ${n1} x ${n2} é: ${mutiplicacao}`);
    } else if (callback === "soma") { 
        let soma = n1 + n2;
        console.log(`O resultado de ${n1} + ${n2} é: ${soma}`);
    } else if (callback === "subtração") {
        let subtracao = n1 - n2;
        console.log(`O resultado de ${n1} - ${n2} é: ${subtracao}`);
    }
}

executarOperacao(1, 2, callback=tipoOperacao());