function calcularMedia(n1, n2, n3) {
    let media = n1 + n2 + n3 / 3; 
    return media
}

let media = calcularMedia(7, 8, 10)
console.log(`O valor da média ${media.toFixed(2)}`);