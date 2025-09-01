document.querySelectorAll('.editar-btn').forEach(function(botao) {
    botao.addEventListener('click', function() {
    const linha = this.closest('tr');
    const celulas = linha.querySelectorAll('td');

    // Verifica se já está em modo de edição
    if (this.textContent === 'Editar') {
        // Transforma as células (exceto a do botão) em inputs
        for (let i = 0; i < celulas.length - 1; i++) {
        const texto = celulas[i].textContent;
        celulas[i].innerHTML = `<input type="text" value="${texto}">`;
        }
        this.textContent = 'Salvar';
    } else {
        // Salva os dados e volta para texto
        for (let i = 0; i < celulas.length - 1; i++) {
        const input = celulas[i].querySelector('input');
        const novoTexto = input.value;
        celulas[i].textContent = novoTexto;
        }
        this.textContent = 'Editar';
    }
    });
});

document.getElementById("btn-adicionar").addEventListener('click', () => {
    const inputNome = document.getElementById("input-nome");
    const inputIdade = document.getElementById("input-idade");
    const resultado = document.getElementById("resultado")
    let item = document.createElement('tr');
    item.innerHTML = `
    <td scope="row">${inputNome.value}</td>
    <td>${inputIdade.value}</td>
    <td>
        <button class="btn btn-primary editar-btn">Editar</button>
    </td>
    `
    resultado.appendChild(item)
    item.document.querySelector("button").addEventListener('click', () => {
        const linha = this.closest('tr')
        const celulas = linha.querySelectorAll('td');
    })
})