import { validarEntrada } from '../utils/utils.js';

export function calcularParImpar() {  
    const numeroParImpar = document.getElementById("input-par-impar");
    const pParImpar = document.getElementById("resultado-par-impar")
    const valorParImpar = parseInt(numeroParImpar.value);

    if (isNaN(valorParImpar)) {
        pParImpar.textContent = "Digite um número válido!"
    } else if (valorParImpar % 2 === 0) {
        pParImpar.textContent = "Este número é par!"
    } else {
        pParImpar.textContent = "Este número é ímpar!"
    }
}