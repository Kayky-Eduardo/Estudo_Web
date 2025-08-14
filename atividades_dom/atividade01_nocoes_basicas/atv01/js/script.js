// Aguarda o carregamento completo do conteúdo HTML antes de executar o código
document.addEventListener('DOMContentLoaded', function(){

    const input1 = document.getElementById('number1');
    const input2 = document.getElementById('number2');



    const somar = (num1, num2) => num1 + num2; 
    const subtrair = (num1, num2) => num1 - num2;
    const mutiplicar = (num1, num2) => num1 * num2;
    const dividir = (num1, num2) => num1 / num2;

    const resultado = document.getElementById('resultado');

    document.getElementById('btnSomar').addEventListener('click', function() {
       
        const num1 = parseFloat(input1.value);
        const num2 = parseFloat(input2.value);
        resultado.textContent = somar(num1, num2);

    })

    document.getElementById('btnSubtrair').addEventListener('click', function() {
        const num1 = parseFloat(input1.value);
        const num2 = parseFloat(input2.value);
        resultado.textContent = subtrair(num1, num2);
        
    })

    document.getElementById('btnMultiplicar').addEventListener('click', function() {
        const num1 = parseFloat(input1.value);
        const num2 = parseFloat(input2.value);
        resultado.textContent = mutiplicar(num1, num2);
        
    })

    document.getElementById('btnDividir').addEventListener('click', function() {
        const num1 = parseFloat(input1.value);
        const num2 = parseFloat(input2.value);
        resultado.textContent = dividir(num1, num2);
        
    })
})