try {
    let entrada = "abc"; // texto que não é número
    let numero = Number(entrada);
    if (isNaN(numero)) {
        throw new Error("Isso não é um número válido!");        
    }
    console.log("Número convertido:", numero);

} catch (error) {
    console.log("Erro capturado:", error.message)
}

try {
    let numerador = 10;
    let denominador = 0;

    if (denominador === 0) {
        throw new Error("Divisão por zero não é permitida!");
        
    }
    let resultado = numerador / denominador;
    console.log("Resultado:", resultado);
} catch (erro) {
    console.log("Erro capturados:", erro.message);
}