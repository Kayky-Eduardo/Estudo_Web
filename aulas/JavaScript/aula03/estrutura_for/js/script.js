let entrada = prompt('Entre com o contador: ');

// verifica se a entrada é válida
if (entrada === null || entrada.trim() === '' || isNaN(Number(entrada))) {
    alert('Entrada inválida! Digite um número.');
} else {
    let cont = Number(entrada); // converte para número
    for (let c = 0; c < 5; c++) {
        console.log(`Contador do for = ${c} || Ver controladora = ${cont}`);
        cont += 1
    }
}