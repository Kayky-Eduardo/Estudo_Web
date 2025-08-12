const analisarNota = (nota) => {
    if (nota >= 7) {
        console.log("aprovado");
    } else if (5 >= nota) {
        console.log("Recuperação");
    } else {
        console.log("Reprovado");
    }
}

analisarNota(5);