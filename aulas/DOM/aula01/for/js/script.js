// Aguarda o carregamento completo do conteúdo HTML antes de executar o código
document.addEventListener('DOMContentLoaded', function(){

    const ul = document.getElementById('listaBreakContinue');

    const limpar = () => ul.innerHTML = '';

    const add = texto => {
        const li = document.createElement('li');

        li.textContent = texto;

        ul.appendChild(li);
    };

    document.getElementById('btnBreak').addEventListener('click', function() {

        limpar();

        for (let i = 1; i <= 50; i++) {
            if (i % 13 === 0) {
                add('Parou no ' + i + ' (divisível por 13)');
                break
            }
            add(i);
        }
    })

    document.getElementById('btnContinue').addEventListener('click', function() {
        limpar();

        for (let i = 1; i <= 5; i++) {
            if (i === 3) continue;

            add(i);
        }
    })
})