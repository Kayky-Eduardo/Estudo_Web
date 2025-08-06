// While interno: repete até que o usuario digite um número valido
while (!numeroValido) {
// pede ao usuario o numero correspondente
    let entradaNumero = prompt(`Digite o número ${i + 1}:`);
    // converte para número real
    let numero = parseFloat(entradaNumero);

    //verifica se é um número válido (não NaN)
    if (!isNaN(numero)) {
        // adiciona ao array
        numeros.push(numero);

        // soma os números
        soma += numero;

        //marca como valido para sair do while
        numeroValido = true;
    } else {
        // alerta
        alert("Valor inválido. Digite um número válido.")
    }
}

// exibe todos os numeros digitados
for (let i = 0; i < numeros.length; i++) {
    console.log(`- ${numeros[i]}`);
}

let media = soma / quantidade

console.log(`Média dos números: ${media}`);

alert("Cadastro concluído!")