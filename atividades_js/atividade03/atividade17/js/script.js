function calcularIMC(peso, altura) {
    let imc = peso / altura * altura;
    return console.log(`O IMC desta pessoa é: ${imc.toFixed(2)}`);
}

calcularIMC(76.8, 1.90);
calcularIMC(120, 1.80);