document.getElementById("btn-adicionar").addEventListener('click', () => {
    const nome = document.getElementById("input-nome").value
    const frequencia = document.getElementById("input-frequencia").value
    const notas = document.getElementById("input-notas").value
    const erro = document.getElementById("resposta-erro")
    const resultado = document.getElementById("resultado")

        let lista_notas = notas.split(",").map(nota => nota.trim());

        if (nome === "" || frequencia === "" || notas === "") {
            erro.textContent = "Preencha todos os campos."
            return
        } else if (lista_notas.some(nota => isNaN(nota)) || isNaN(parseFloat(frequencia))) {
            erro.textContent = "Digite valores numéricos válidos."
            return
        } else if (parseFloat(frequencia) > 100 || parseFloat(frequencia) < 0) {
            erro.textContent = "Digite uma frequência válida"
            return
        } else {
            erro.textContent = ""
            let valores = lista_notas.map(valor => parseFloat(valor))

            let soma_notas =  valores.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0)
            let item = document.createElement("tr")

            let media = valores.length > 0 ? soma_notas / valores.length : 0

            let mencao = "";
            if (media > 8.5) {
                mencao = "A"
            } else if (media > 6.5) {
                mencao ="B"
            } else if (media >= 4) {
                mencao = "C"
            } else {
                mencao = "D"
            }
            item.innerHTML = `
            <th scope="row" class="text-center">${nome}</th>
            <td>${frequencia}</td>
            <td>${media.toFixed(2)}</td>
            <td>${mencao}</td>
            <td class="text-center">
                <button id="btn-remover" class="btn btn-primary">Remover</button>
            </td>
            `
            resultado.appendChild(item)
            item.querySelector("button").addEventListener("click", () => {
                item.remove()
            })
    }}
)