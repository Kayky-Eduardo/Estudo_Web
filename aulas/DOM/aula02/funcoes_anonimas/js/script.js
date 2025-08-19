const saudacao = (nome) => {
    return `Olá, ${nome}! Seja bem-vindo(a).`
};

const mostrarResultado = (mensagem) => {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<p>${mensagem}</p>`;
};
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('nome')
    const saudarBtn = document.getElementById('saudar');
    const limparBtn = document.getElementById('limpar');

    saudarBtn.addEventListener('click', () => {
        const nome = input.value
        const mensagem = saudacao(nome);
        mostrarResultado(mensagem)
        
    })
    limparBtn.addEventListener('click', () => {
        document.getElementById('resultado').innerHTML = '';

    })
})
