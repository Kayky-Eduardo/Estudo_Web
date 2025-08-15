// Aguarda o carregamento completo do conteúdo HTML antes de executar o código
document.addEventListener('DOMContentLoaded', function(){

    const quadrado = document.getElementById('quadrado');
    quadrado.style.backgroundColor = "black";

    document.getElementById('btnVermelho').addEventListener('click', function() {
        quadrado.style.backgroundColor = "red";
    })

    document.getElementById('btnAzul').addEventListener('click', function() {
        quadrado.style.backgroundColor = "blue";
    })

    document.getElementById('btnVerde').addEventListener('click', function() {
        quadrado.style.backgroundColor = "green";
    })
});