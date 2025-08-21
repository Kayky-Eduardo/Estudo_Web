const produtos = [
    { nome: "Sabonete Natural", preco: 15.00, categoria: "higiene" },
    { nome: "Shampoo Orgânico", preco: 25.00, categoria: "higiene" },
    { nome: "Granola Artesanal", preco: 18.50, categoria: "alimentacao" },
    { nome: "Mel Puro", preco: 22.00, categoria: "alimentacao" }
];

mostrarItens('todos');

function mostrarItens(filtro) {
    const lista = document.getElementById("listaDeProdutos") 
    let soma = 0;
    let valorTotal = 0;
    lista.innerHTML = ""
    produtos.forEach(produto => {
        if (filtro === "todos" || produto.categoria === filtro) {
            const item = document.createElement("div")
            item.className = "produto";
            item.innerHTML = `
            <strong>${produto.nome}</strong><br>
            Preço: ${produto.preco}
            `
            lista.appendChild(item)
            soma += produto.preco
        } 
    })
    
    const total = document.getElementById('total')
    valorTotal = soma
    total.innerHTML = `Valor total: ${valorTotal}`;
}

const filtro = document.getElementById('filter');

filtro.addEventListener('change', () => {
    mostrarItens(filtro.value);
})


