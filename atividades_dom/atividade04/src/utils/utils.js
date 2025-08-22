export function validarEntrada(mensagem) {
    const entrada = prompt(mensagem);
    if (entrada === null || entrada.trim() === '') {
        alert('Campo não pode ser vazio!');
        return null;
    }
    const numero = Number(entrada);
    if (isNaN(numero)) {
        alert('Favor digitar um número!');
        return null;
    }
    return numero;
}

export function adicionarEventoBotao(idBotao, funcao) {
    document.getElementById(idBotao).addEventListener('click', funcao);
}