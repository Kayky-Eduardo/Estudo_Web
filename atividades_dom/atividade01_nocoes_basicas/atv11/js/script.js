// Aguarda o carregamento completo do conteúdo HTML antes de executar o código
document.addEventListener('DOMContentLoaded', function(){
    const ul = document.getElementById('saida');
    const input = document.getElementById('num')

    document.getElementById('btn').addEventListener("click", function() {
        const numero = Number(input.value);
        parseInt(numero)
        for (i=0; i<10; i++) {
            let resultado = numero * i;
            let li = document.createElement('li')
            li.textContent = `${numero} x ${i} = ${resultado}`;
            ul.appendChild(li)
        }
        input.value = "";
    })
})