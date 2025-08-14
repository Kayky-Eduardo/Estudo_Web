// Aguarda o carregamento completo do conteúdo HTML antes de executar o código
document.addEventListener('DOMContentLoaded', function(){

    const input = document.getElementById('number');

    const resultado = document.getElementById('resultado');

    document.getElementById('btnVerificar').addEventListener('click', function() {
       
        const num1 = parseFloat(input.value);
        if (num1 < 0) {
            resultado.textContent = 'Este número é negativo!'
        } else {
            resultado.textContent = 'Este número é positivo!'
        }
    })
});