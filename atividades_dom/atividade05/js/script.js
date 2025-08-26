let lista_nota = []

document.getElementById("btn-adicionar").addEventListener('click', () => {
    const nome = document.getElementById("input-nome").value
    const frequencia = document.getElementById("input-frequencia").value
    const notas = document.getElementById("input-notas").value
    const erro = document.getElementById("resposta-erro")
    document.getElementById

    if (isNaN(notas) || isNaN(frequencia) || nome == "") {
        erro.textContent = "Digite os valores da forma correta"
    } else {
        let lista_notas = notas.split(", ")
        let valores = lista_notas.map(valor => parseFloat(valor))

        let soma_notas =  valores.reduce(function(acumulador, numeroAtual) {        
            return acumulador + numeroAtual
        }, 0)

        let media = soma_notas / 4
    }
    
})