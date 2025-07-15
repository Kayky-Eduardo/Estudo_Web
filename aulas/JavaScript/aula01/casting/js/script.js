let resultado1 = "5" + 3; // "53" (Número vira string)
let resultado2 = "10" * 2; // 8(String vira número)

// conversão explícita
let numero = Number("123"); // 123 (string para numero)
let texto = String(456); // "456" (número para string)
let verdadeiro = Boolean(1); // true (1 é convertido apra boolean)

let valor1 = "123abc";
let n1 = parseInt(valor1); // 123 * Funciona
let n2 = parseInt(valor1); // 123 * Falha

let valor2 = "45.67";
let n3 = parseInt(valor2) // 45 * Apenas parte inteira
let n4 = Number(valor2) // 45.67 * número completo (float)