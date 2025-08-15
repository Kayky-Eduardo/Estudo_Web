// Aguarda o carregamento completo do conteúdo HTML antes de executar o código
document.addEventListener('DOMContentLoaded', function(){

    let tema_escuro = false;
    document.getElementById('btnTema').addEventListener('click', function() {
        if (tema_escuro) {
            document.body.style.background = "white";
            document.body.style.color = "black";
            tema_escuro = false
            
        } else {
            tema_escuro = true
            document.body.style.background = "black";
            document.body.style.color = "white";
        }
        
    })
})