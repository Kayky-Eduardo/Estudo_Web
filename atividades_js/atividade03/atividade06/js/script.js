function mutiplicador(x) {
    return y => x * y
    }

const dobro = mutiplicador(2);
const triplo = mutiplicador(3);

console.log(dobro(5));
console.log(triplo(5));