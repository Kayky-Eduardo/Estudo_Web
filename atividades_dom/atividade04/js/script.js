document.getElementById("btn-par-impar").addEventListener('click', () => {
    const numeroParImpar = parseFloat(document.getElementById("input-par-impar"));
    const pParImpar = document.getElementById("resultado-par-impar")
    const valorParImpar = parseInt(numeroParImpar.value);

    if (isNaN(valorParImpar)) {
        pParImpar.textContent = "Digite um número válido!"
    } else if (valorParImpar % 2 === 0) {
        pParImpar.textContent = "Este número é par!"
    } else {
        pParImpar.textContent = "Este número é ímpar!"
    }
})

document.getElementById('btn-maior-menor').addEventListener('click', () => {
    const nMaiorMenor1 = document.getElementById("input-maior-menor1");
    const nMaiorMenor2 = document.getElementById("input-maior-menor2");
    const nMaiorMenor3 = document.getElementById("input-maior-menor3");
    const vMaiorMenor1 = parseFloat(nMaiorMenor1.value);
    const vMaiorMenor2 = parseFloat(nMaiorMenor2.value);
    const vMaiorMenor3 = parseFloat(nMaiorMenor3.value);
    const pMaiorMenor = document.getElementById("resultadoMaiorMenor")

    
    if (isNaN(vMaiorMenor1) || isNaN(vMaiorMenor2) || isNaN(vMaiorMenor3)) {
        pMaiorMenor.textContent = "Preencha todos os campos com números válidos.";
    } else if (vMaiorMenor1 === vMaiorMenor2 || vMaiorMenor2 === vMaiorMenor3) {
        pMaiorMenor.textContent = "Todos os numeros são iguais!"
    } else {
        const maior = Math.max(vMaiorMenor1, vMaiorMenor2, vMaiorMenor3);
        const menor = Math.min(vMaiorMenor1, vMaiorMenor2, vMaiorMenor3);
        pMaiorMenor.innerHTML = `O maior número é ${maior}<br>O menor número é ${menor}`;
    }
    
})

document.getElementById('btn-velocidade').addEventListener('click', () => {
    const nVelocidade = document.getElementById("input-velocidade");
    const vVelocidade = parseFloat(nVelocidade.value);
    const pVelocidade = document.getElementById("resultado-velocidade")

    if (isNaN(vVelocidade)) {
        pVelocidade.textContent = "Digite um número válido!"
    } else if (vVelocidade < 60) {
        pVelocidade.textContent = "Você está dentro do límite de velocidade!"
    } else {
        pVelocidade.textContent = "Você está fora do límite de velocidade!"

    }
})

document.getElementById('btn-salario').addEventListener('click', () => {
    const nSalario = document.getElementById("input-salario");
    const vSalario = parseFloat(nSalario.value);
    const pSalario = document.getElementById("resultado-salario")
    let novoSalario = 0;
    if (isNaN(vSalario) || vSalario <= 0) {
        pSalario.textContent = "Digite um número válido!"
    } else if (vSalario < 1000) {
        novoSalario =  vSalario + (vSalario * 0.10)
        pSalario.textContent = `Você recebeu um aumento de 10%. Salário atual: ${novoSalario}`
    } else if (vSalario > 1500) {
        novoSalario = vSalario + (vSalario * 0.05)
        pSalario.textContent = `Você recebeu um aumento de 5%. Salário atual: ${novoSalario}`
    } else if (1000 > vSalario < 1500) {
        novoSalario = vSalario
        pSalario.textContent = `Você não recebeu um aumento. Salário atual: ${novoSalario}`
    }
})

document.getElementById('btn-passagem').addEventListener('click', () => {
    const nPassagem = document.getElementById("input-passagem");
    const kmPassagem = parseFloat(nPassagem.value);
    const pPassagem = document.getElementById("resultado-passagem")
    let valorPassagem = 0;
    if (isNaN(kmPassagem) || kmPassagem <= 0) {
        pPassagem.textContent = "Digite um valor válido";
    } else if (kmPassagem <= 200) {
        valorPassagem = kmPassagem * 0.70
        pPassagem.innerHTML = `
        Na distância de ${kmPassagem}km a passagem custará ${valorPassagem}
        `
    } else {
        valorPassagem = kmPassagem * 0.40
        pPassagem.innerHTML = `
        Na distância de ${kmPassagem}km a passagem custará ${valorPassagem}
        `
    }
})

document.getElementById('btn-bissexto').addEventListener('click', () => {
    const nBissexto = document.getElementById("input-bissexto");
    const vBissexto = parseFloat(nBissexto.value);
    const pBissexto = document.getElementById("resultado-bissexto")
})