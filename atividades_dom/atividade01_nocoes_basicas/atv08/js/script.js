// Aguarda o carregamento completo do conteúdo HTML antes de executar o código
document.addEventListener('DOMContentLoaded', function(){
    const p = document.getElementById('saida');
    const input = document.getElementById('input')


    document.getElementById('btnVerificar').addEventListener("click", function() {
        const texto = input.value;
        let numero = Number(texto);
        if (!isNaN(numero)) {
            p.textContent = `Number`
        } else {
            p.textContent = `${typeof texto}`
        }
        if (texto.trim().toLowerCase() === "false" || texto.trim().toLowerCase() === "true" ) {
            p.textContent = 'Boolean';
        }
        input.value = "";
    })
})