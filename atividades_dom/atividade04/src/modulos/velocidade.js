import { validarEntrada } from '../utils/utils.js';

export function verificarVelocidade () {
    const nVelocidade = document.getElementById("input-velocidade");
    const vVelocidade = parseFloat(nVelocidade.value);
    const pVelocidade = document.getElementById("resultado-velocidade")

    if (isNaN(vVelocidade)) {
        pVelocidade.textContent = "Digite um número válido!"
    } else if (vVelocidade < 60) {
        pVelocidade.textContent = "Você está dentro do límite de velocidade!"
    } else {
        pVelocidade.textContent = "Você está fora do límite de velocidade!"

    }
}
