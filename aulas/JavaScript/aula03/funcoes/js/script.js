//calcular o perimetro de um paralelepipedo
function calcularPerimetro(comprimento, Largura) {
    return 2 * (comprimento + Largura);
}

// calcular a area de um paralelepipedo
function calcularArea(comprimento, Largura, altura) {
    return 2 * (comprimento * Largura + comprimento * altura + Largura * altura);
}

const comprimento = 5;
const largura = 3;
const altura = 2;

const perimetro = calcularPerimetro(comprimento, largura);
const area = calcularArea(comprimento, largura, altura);

console.log('Paralelepípedo');
console.log(`Comprimento: ${comprimento}`)
console.log(`Largura: ${largura}`);
console.log(`Altura: ${altura}`);
console.log(`Perímetro: ${perimetro}`);
console.log(`Área: ${area}`);