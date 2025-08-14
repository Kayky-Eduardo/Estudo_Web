// Aguarda o carregamento completo do conteúdo HTML antes de executar o código
document.addEventListener('DOMContentLoaded', function(){

    const input = document.getElementById('texto');

    const resultado = document.getElementById('resultado');

    document.getElementById('texto').addEventListener('input', function() {
    
        const texto = input.value;
        let caracteres = texto.length;
        resultado.textContent = caracteres   
    })
});