// Aguarda o carregamento completo do conteúdo HTML antes de executar o código
document.addEventListener('DOMContentLoaded', function(){
    const p = document.getElementById('saida');

    let tempo = 10;

    function contar() {
        p.textContent = tempo;

        if (tempo === 0) {
            p.textContent = "Tempo esgotado!";
            return;
        }
        tempo--;
        setTimeout(contar, 1000);
    }

    contar();
})