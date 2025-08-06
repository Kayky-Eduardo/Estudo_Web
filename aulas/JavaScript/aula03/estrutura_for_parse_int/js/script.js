// Declara a variável que armazenará a quantidade de números
let quantidade = 0;

// WHILE: continua pedindo até o usuária digitar um número inteiro positivo
while (true) {
    // solicita ao usuário a quantidade de números que ele quer cadastrar
    let entrada = prompt('Quantos números você deseja cadastrar? ');
    // converte a entrada para número inteiro
    quantidade = parseInt(entrada);
    // Verificar se é um número inteiro e maior que zero
    if (!isNaN(quantidade) && quantidade > 0) {
        break; // se for válido, sai do loop
    } else {
        // caso contrário, exibe um mensagem de erro
        alert("Por favor, digite um número inteiro positivo.");
    }
}

// cria um array para armazenar os números digitados
let numeros = [];

// variável para armazenar a soma dos números (para cálculo de média)
let soma = 0;

// For: loop que executa exatamente 'quantidade' vezes
for (let i = 0; i < quantidade; i++) {
    // variavel de controle para validar a entrada
    let numerovalido = false;

}
