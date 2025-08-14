// Aguarda o carregamento completo do conteúdo HTML antes de executar o código
document.addEventListener('DOMContentLoaded', function(){
    const p = document.getElementById('saida');
    const input = document.getElementById('input')
    var numeros = /([0-9])/;
    var alfabeto = /([a-zA-Z])/;
    var caracteresEspeciais = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;

    document.getElementById('btnVerificar').addEventListener("click", function() {
        const texto = input.value;
        if (texto.length < 6){
            p.textContent = "Tamanho pequeno."
        } else if (texto.match(numeros) && texto.match(alfabeto) && texto.match(caracteresEspeciais)) {

        }
        input.value = "";

    })
})