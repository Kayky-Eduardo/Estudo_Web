let nome = prompt("Digite o seu nome: ");

function cumprimentar(nome) {
    if (nome === null || nome.trim() === '' ) {
        console.log(`Olá, Vistante!`);
    } else {
        console.log(`Olá, [${nome}]`);
    }
}

cumprimentar(nome);