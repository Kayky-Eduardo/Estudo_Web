const numeros = [1, 2, 3, 4, 5];

const pessoas = [
    { nome: 'Gal Gadot', idade: 40, cidade: 'Rosh HaAyin' },
    { nome: 'Elizabeth Olsen', idade: 36, cidade: 'Sherman Oaks' },
    { nome: 'Alexandra Daddario', idade: 39, cidade: 'Nova York'},
    { nome: 'Anna de Armas', idade: 37, cidade: 'Havana'},
    { nome: 'Grace Kelly', idade: 95, cidade: 'Filadélfia'},
    { nome: 'Jaz Sinclair', idade: 17, cidade: 'Dallas'}
];

document.getElementById('botao-paraCada').addEventListener('click', () => {
    let resultado = "";
    numeros.forEach(function(numeros, indice) {
        resultado += `Posição ${indice}: ${numeros}\n`;
    })

    document.getElementById('resultado-paraCada').innerHTML = `
    <strong>Array original:</strong> ${JSON.stringify(numeros)}<br><br>
    <strong>Iteração com forEach</strong><br>${resultado}
    <small>Obs: forEach não retorna um novo array</small><br>
    `;
})


document.getElementById('botao-mapear').addEventListener('click', () => {
    const quadrados = numeros.map(function(numero) {
        return numero * numero;
    });

    document.getElementById('resultado-mapear').innerHTML = `
    <strong>Array original:</strong> ${JSON.stringify(numeros)}<br><br>
    <strong>Iteração com quadrados</strong> ${JSON.stringify(quadrados)}<br>
    <small>Obs: map sempre retorna um novo array do mesmo tamanho</small><br>
    `;
})


document.getElementById('botao-filtrar').addEventListener('click', () => {
    const maioresDeIdade = pessoas.filter(function(pessoa) {
        return pessoa.idade >= 18
    })

    document.getElementById('resultado-filtrar').innerHTML = `
    <strong>Array original:</strong> ${JSON.stringify(numeros)}<br><br>
    <strong>Maiores de idade</strong>: ${JSON.stringify(maioresDeIdade)}<br>
    <small>Obs: filter retorna um novo array com elementos que passam nos testes</small><br>
    `;
})


document.getElementById('botao-reduzir').addEventListener('click', () => {
    const somaTotal = numeros.reduce(function(acumulador, numeroAtual) {
        return acumulador + numeroAtual
    })

    document.getElementById('resultado-reduzir').innerHTML = `
    <strong>Array original:</strong> ${JSON.stringify(numeros)}<br><br>
    <strong>Soma total(reduce):</strong>: ${(somaTotal)}<br>
    <small>Obs: reduce pode transformar um array em qualquer tipo de valor</small><br>
    `;
})

document.getElementById('botao-encontrar').addEventListener('click', () => {
    const menorDeIdade = pessoas.find(function(pessoa) {
        return pessoa.idade < 18
    })

    document.getElementById('resultado-encontrar').innerHTML = `
    <strong>Array original:</strong> ${JSON.stringify(numeros)}<br><br>
    <strong>Primeiro menor de idade (find):</strong>: ${JSON.stringify(menorDeIdade)}<br>
    <small>Obs: Find retorna apenas o primeiro elemento encontrado</small><br>
    `;
});
document.getElementById('botao-algum').addEventListener('click', () => {
    const existeMenor = pessoas.some(function(pessoa) {
        return pessoa.idade < 18;
    })

    document.getElementById('resultado-algum').innerHTML = `
    <strong>Array original:</strong> ${JSON.stringify(numeros)}<br><br>
    <strong>Existe algum menor de idade?(some):</strong>: ${existeMenor ? 'Sim' : 'Não'}<br>
    <small>Obs: some retorna true se pelo menos um elemento passar no teste</small><br>
    `;
})

document.getElementById('botao-todos').addEventListener('click', () => {
    const todosMaiores = pessoas.every(function(pessoa) {
        return pessoa.idade >= 18;
    })

    document.getElementById('resultado-todos').innerHTML = `
    <strong>Array original:</strong> ${JSON.stringify(numeros)}<br><br>
    <strong>Todos são maiores de idade?(every):</strong>: ${todosMaiores ? 'Sim' : 'Não'}<br>
    <small>Obs: every retorna true apenas se TODOS os elementos passarem no teste</small><br>
    `;
})