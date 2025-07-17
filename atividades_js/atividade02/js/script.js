let primeiro_nome = prompt("Digite o seu primeiro nome: ");
let segundo_nome = prompt("Digite o seu segundo nome: ");
let terceiro_nome = prompt("Digite o seu terceiro nome: ");
let possibilidade = prompt("Você possui um quarto nome?(Sim/Não): ");

possibilidade = possibilidade.trim().toLowerCase();
if (possibilidade == "sim" || possibilidade == "s") {
    let quarto_nome = prompt("Digite seu quarto nome: ");
    
    let nome_completo = primeiro_nome.concat(" ", segundo_nome, " ", terceiro_nome, " ", quarto_nome).toLowerCase();
    
    let tamanho = nome_completo.length;
    console.log(`Nome em maiúsculo: ${nome_completo.toUpperCase()}`);
    console.log(`Nome em minúsculo: ${nome_completo.toLowerCase()}`);
    console.log(`O nome ${nome_completo} tem ${tamanho} caracteres`);

    let nome_invertido = nome_completo.split("").reverse().join("");  
    console.log(`${nome_completo} de ao contrário é ${nome_invertido}`);

    let trocar = prompt("Deseja alterar algum nome?(s/n): ").toLowerCase();
    if (trocar == "s" || trocar == "sim") {
        let nome_escolhido = prompt("Qual nome deseja alterar? ").toLowerCase();
        if (nome_completo.includes(nome_escolhido)) {
            let trocar_nome = prompt("Para qual deseja alterar? ").toLowerCase();
            nome_completo = nome_completo.replace(nome_escolhido, trocar_nome);
            console.log(nome_completo)
        } else {
            alert("Este nome não foi encontrado");
        }
    }
} else if (possibilidade == "nao" || possibilidade == "n") {
    let nome_completo = primeiro_nome.concat(" ", segundo_nome, " ", terceiro_nome);

    let tamanho = nome_completo.length;
    console.log(`Nome em maiúsculo: ${nome_completo.toUpperCase()}`);
    console.log(`Nome em minúsculo: ${nome_completo.toLowerCase()}`);
    console.log(`O nome ${nome_completo} tem ${tamanho} caracteres`);

    let nome_invertido = nome_completo.split("").reverse().join("");  
    console.log(`${nome_completo} de ao contrário é ${nome_invertido}`);
} else {
    console.log("Digite uma resposta válida!");
}