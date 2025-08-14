// Aguarda o carregamento completo do conteúdo HTML antes de executar o código
document.addEventListener('DOMContentLoaded', function(){
    const ul = document.getElementById('saida');
    const input = document.getElementById('tarefa')
    let contador = 1;

    const addItem = texto => {
        const li = document.createElement('li');
        li.textContent = texto;
        ul.appendChild(li);
    };

    document.getElementById('btnInserir').addEventListener("click", function() {
        const texto = input.value;
        addItem(`Tarefa ${contador}: ${texto}`);
        input.value = "";
        contador++;
    })
})