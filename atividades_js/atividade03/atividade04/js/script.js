function converterCelsiusParaFahrenheit(celsius) {
    if (celsius === null || celsius.trim() === '' || isNaN(Number(celsius))) {
        console.log("Número inválido");
    } else {
        let fahrenheit = celsius * 1.8 + 32
        console.log(`${celsius} grau celsius são ${fahrenheit} fahrenheit `);
    }
}

let celsius = prompt("Digite um número em grau celsius: ");
converterCelsiusParaFahrenheit(celsius);