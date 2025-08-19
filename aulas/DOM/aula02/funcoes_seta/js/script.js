
function mutiplicador(x) {
    return y => x * y
    }

const dobro = mutiplicador(2);
const triplo = mutiplicador(3);

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('valor')
    const calculoDobro = document.getElementById('dobro');
    const calculoTriplo = document.getElementById('triplo');


    calculoDobro.addEventListener('click', () => {
        const resultadoElement = document.getElementById('resultado');
        let valor = input.value
        valor = parseFloat(input.value);
        let valor_dobro = dobro(valor)
        resultadoElement.innerHTML = `Dobro: ${valor_dobro}`
    })

    calculoTriplo.addEventListener('click', () => {
        const resultadoElement = document.getElementById('resultado');
        let valor = input.value
        valor = parseFloat(input.value);
        let valor_triplo = triplo(valor)
        resultadoElement.innerHTML = `Triplo: ${valor_triplo}`
    })
})




