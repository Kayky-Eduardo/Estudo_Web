// Aguarda o carregamento completo do conteúdo HTML antes de executar o código
document.addEventListener('DOMContentLoaded', function(){
    const p = document.getElementById('saida');
    const input = document.getElementById('texto')

    const verificarPalindromo = texto => {
    let texto_novo  = texto.trim().split("").reverse().join("")
    if (texto === texto_novo) {
        p.textContent = "Este texto é um palíndromo";
    } else {
        p.textContent = "Este texto não é um palíndromo";
    }
    }

    document.getElementById('btnVerificar').addEventListener("click", function() {
        const texto = input.value;
        verificarPalindromo(texto)
        input.value = "";
    })
})