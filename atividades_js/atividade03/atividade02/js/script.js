numero = prompt("Digite um número inteiro: ");

function ehPar (numero) {
    if (numero === null || numero.trim() === '' || isNaN(Number(numero))) {
        alert('numero inválido! Digite um número.');
    } else {
        numero = Number(numero); // converte para número
        if (numero % 2 === 0) {
            console.log("Este número é par");
            return true
        } else {
            console.log("Este número é impar");
            return false
        }
        }
    }

let funcao = ehPar(numero);

console.log(funcao);