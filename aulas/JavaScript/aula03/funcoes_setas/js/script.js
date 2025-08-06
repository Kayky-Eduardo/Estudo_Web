/*
um carro de massa 1.200 kg trafega por uma estrada reta a uma velocidade constante de 25m/s.
Calcule a energia cinética do carro nesse momento. Se o carro dobrar sua velocidade para 50 m/s,
qual será sua nova energia cinética? o que isso mostra sobre a relação entre
velocidade e energia cinética */

// arrow function para calcular energia cinética
const calcularEnergiaCinetica = (massa, velocidade) => 0.5 * massa * (Math.pow(velocidade, 2));

// dados fornecidos
const massa = 1200;
const velocidadeInicial = 25; // em m/s
const velocidadeFinal = 50; // em m/s

// Cálculo da energia cinética nas duas velocidades
const energiaInicial = calcularEnergiaCinetica(massa, velocidadeInicial);
const energiaFinal = calcularEnergiaCinetica(massa, velocidade);

// Exibindo os resultados
console.log("Energia cinética com 25 m/s:", energiaInicial, "Joules");
console.log("Energia cinética com 50 m/s", energiaFinal, "Joules");

// Análise da relação entre velocidade e energia 
console.log("A energia cinética quadruplicou quanda a velocidade dobrou.");
console.log("Isso mostra que a energia cinética é proporcional ao quadrado da velocidade.")