const produtos = [
    { nome: "Sabonete Natural", preco: 15.0, categoria: "cosmetico"},
    { nome: "Shampoo Orgânico", preco: 25.0, categoria: "cosmetico"},
    { nome: "Granola Artesanal", preco: 18.5, categoria: "alimento"},
    { nome: "Mel Puro", preco: 22.0, categoria: "alimento"}
];

const filtro = document.getElementById('filtro')
const resultado = document.getElementById('resultado')
const total = document.getElementById('total')

mostrarItems(filtro);
somarItens(filtro);

function mostrarItems(filtro) {
    filtro = filtro.value
    resultado.innerHTML = ""
    produtos.forEach(produto => {
        let item = document.createElement("div")
        item.className = "div-resultado";
        if (filtro === "todos" || filtro === produto.categoria){
            item.innerHTML = `<p>
            Nome: ${produto.nome}<br>
            preço: ${produto.preco}
            </p>
            `
            resultado.appendChild(item);
            }
    });
}

function somarItens(filtro) {
    filtro = filtro.value;
    const filtragem = produtos.filter(function(produto){
    if (filtro === "todos" || produto.categoria === filtro) {
    }})

    const somar = filtragem.reduce(function(acumulador, numeroAtual) {        
        return acumulador + numeroAtual.preco   
    }, 0)   
    total.innerHTML = `<p>Valor total: ${somar}</p>`
}

document.getElementById('filtro').addEventListener('change', () => {
    mostrarItems(filtro);
    somarItens(filtro);
})