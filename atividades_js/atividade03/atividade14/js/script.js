function somar1(n1, n2) {
    return n1 + n2
}

function saudacao1(nome) {
    return `Bom dia ${nome}`
}

function dobro1(valor) {
    return valor * 2
}

console.log(somar1(1, 2));
console.log(saudacao1("kayky"));
console.log(dobro1(2));

const somar = (n1, n2) => n1 + n2;
const saudacao = (nome) => `Bom dia ${nome}!`;
const dobro = (valor) => valor * 2;

console.log(somar(1, 2));
console.log(saudacao("kayky"));
console.log(dobro(2));