import { validarEntrada } from '../utils/utils.js';

function calcularMaiorMenor() {
    const ids = ["input-maior-menor1", "input-maior-menor2", "input-maior-menor3"];
    const valores = ids.map(id => parseFloat(document.getElementById(id).value));
    const resultado = document.getElementById("resultadoMaiorMenor")

    if (isNaN(valores[1]) || isNaN(valores[2]) || isNaN(valores[3])) {
        resultado.textContent = "Preencha todos os campos com números válidos.";
    } else if (valores[1] === valores[2] || valores[2] === valores[3]) {
        resultado.textContent = "Todos os numeros são iguais!"
    } else {
        const maior = Math.max(valores[1], valores[2], valores[3]);
        const menor = Math.min(valores[1], valores[2], valores[3]);
        resultado.innerHTML = `O maior número é ${maior}<br>O menor número é ${menor}`;
    }
    
}
    