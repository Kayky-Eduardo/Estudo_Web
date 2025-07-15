// Exemplo com VAR
var saudacao = "Olá";
var saudacao = "Oi"; // var permite redeclaração

// Exemplo com let
let nome = "João";
// let nome = "maria"; // erro: não pode redeclarar com let no mesmo escopo
nome = "Carlos"; // pode retribuir valor
console.log("let:", nome) // Resultado: Carlos

// ex com const
const anoNascimento = 1990;
// não da para retribuir valor na const

// demonstrando escopo de let e var
if (true) {
    var linguagem1 = "JavaScript (com var)";
    let linguagem2 = "JavaScript (com let)";
}

console.log("Fora do bloco if:")
console.log("var linguagem1: ", linguagem1)
// console.log("let linguagem2: ", linguagem2) //erro: linguagem não existe fora do bloco