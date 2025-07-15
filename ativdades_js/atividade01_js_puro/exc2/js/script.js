const data = new Date();
let ano_atual = data.getFullYear();
let ano_nascimento = Number(prompt("Digite o ano de nascimento: "));
let idade_atual = ano_nascimento - ano_atual;
console.log(idade_atual)