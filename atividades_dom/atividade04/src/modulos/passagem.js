import { validarEntrada } from '../utils/utils.js';

export function calcularPassagem() {
    const nPassagem = document.getElementById("input-passagem");
    const kmPassagem = parseFloat(nPassagem.value);
    const pPassagem = document.getElementById("resultado-passagem")
    let valorPassagem = 0;
    if (isNaN(kmPassagem) || kmPassagem <= 0) {
        pPassagem.textContent = "Digite um valor válido";
    } else if (kmPassagem <= 200) {
        valorPassagem = kmPassagem * 0.70
        pPassagem.innerHTML = `
        Na distância de ${kmPassagem}km a passagem custará ${valorPassagem}
        `
    } else {
        valorPassagem = kmPassagem * 0.40
        pPassagem.innerHTML = `
        Na distância de ${kmPassagem}km a passagem custará ${valorPassagem}
        `
    }}