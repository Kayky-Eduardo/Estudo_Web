let primeiro_nome = prompt("Digite o seu primeiro nome: ");
let segundo_nome = prompt("Digite o seu segundo nome: ");
let terceiro_nome = prompt("Digite o seu terceiro nome: ");
let possibilidade = prompt("Você possui um quarto nome?(Sim/Não): ");

possibilidade = possibilidade.toLowerCase();
if (possibilidade == "sim" || possibilidade == "s") {
    let quarto_nome = prompt("Digite seu quarto nome: ");
    
    let nome_completo = primeiro_nome.concat(" ", segundo_nome, " ", terceiro_nome, " ", quarto_nome);
    
    let tamanho = nome_completo.length;
    console.log(`Nome em maiúsculo: ${nome_completo.toUpperCase()}`)
    console.log(`Nome em minúsculo: ${nome_completo.toLowerCase()}`)
    console.log(`O nome ${nome_completo} tem ${tamanho} caracteres`);

    let lista_nome_completo = nome_completo.split(" ");
    let lista_nome_inverso = lista_nome_completo.reverse();
    let nome_inverso = lista_nome_inverso[0].concat( " ", lista_nome_inverso[1], " ",
    lista_nome_inverso[2], " ", lista_nome_inverso[3])
    
    console.log(`${nome_completo} de ao contrário é ${nome_inverso}`)
} else if (possibilidade == "nao" || possibilidade == "n") {
    let nome_completo = primeiro_nome.concat(" ", segundo_nome, " ", terceiro_nome);

    let tamanho = nome_completo.length;
    console.log(`Nome em maiúsculo: ${nome_completo.toUpperCase()}`)
    console.log(`Nome em minúsculo: ${nome_completo.toLowerCase()}`)
    console.log(`O nome ${nome_completo} tem ${tamanho} caracteres`);

    let lista_nome_completo = nome_completo.split(" ");
    let lista_nome_inverso = lista_nome_completo.reverse();

    let nome_inverso = lista_nome_inverso[0].concat( " ", lista_nome_inverso[1], " ",
    lista_nome_inverso[2]);
    console.log(`${nome_completo} de ao contrário é ${nome_inverso}`)

} else {
    console.log("Digite uma resposta válida!")
}