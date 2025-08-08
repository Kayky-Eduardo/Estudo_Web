function formatarData(dia, mes, ano) {
    dia = ("0" + dia).slice(-2);
    mes = ("0" + mes).slice(-2);
    let data = `${dia}/${mes}/${ano}`;
    return data
} 

let data_formatada = formatarData(8, 8, 2025);
console.log(data_formatada);

let data_formatada2 = formatarData(15, 11, 2025);
console.log(data_formatada2);