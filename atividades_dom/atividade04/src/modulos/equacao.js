export function calcularEquacao (a, b, c) {
    if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
        return "Digite valores válidos";
    }
    let delta = (b * b) - 4 * a * c;
    if (delta < 0) {
        return "Delta negativo. Não existem raízes reais.";
    }
    let x1 = (-b + (delta ** 0.5)) / (2 * a);
    let x2 = (-b - (delta ** 0.5)) / (2 * a);
    return { x1 , x2 };
}