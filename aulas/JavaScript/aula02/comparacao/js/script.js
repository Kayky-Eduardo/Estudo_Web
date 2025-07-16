let idade = prompt("Qual a sua idade: ");
let temSenha = prompt("Você tem senha de acesso(s/n)? ");

idade = Number(idade);
temSenha = temSenha.toLowerCase();

if (idade >= 18 && temSenha == "sim") {
    alert('Acesso permitido!');
} else if (idade < 18 || temSenha == "não") {
    alert("Acesso negado!");
} else {
    alert("Dados inválidos");
}