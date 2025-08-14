// Aguarda o carregamento completo do conteúdo HTML antes de executar o código
document.addEventListener('DOMContentLoaded', function(){
    const p = document.getElementById('saida');
    const input = document.getElementById('numero')
    let numero_sorteado = Math.floor(Math.random() * 11);
    let contador = 0

    const verificarNumero = numero => {
        contador++;
        if (numero < numero_sorteado) {
            p.textContent = "Este numero é menor que o numero sorteado";
        } else if (numero === numero_sorteado){
            p.textContent = "Você acertou o número sorteado!";
        }else {
            p.textContent = "Este numero maior que o numero sorteado";
        }}
        if (contador >= 3 || numero != numero_sorteado) {
            p.textContent = `O número correto é ${numero_sorteado}`;
        
    }

    document.getElementById('btnVerificar').addEventListener("click", function() {
        const numero = parseInt(input.value);
        verificarNumero(numero)
        input.value = "";
    })
})