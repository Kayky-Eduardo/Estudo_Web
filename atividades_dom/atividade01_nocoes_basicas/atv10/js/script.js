// Aguarda o carregamento completo do conteúdo HTML antes de executar o código
document.addEventListener('DOMContentLoaded', function(){
    const p = document.getElementById('saida');
    const input = document.getElementById('senha')
    const numeros = "0123456789";
    const letrasMaius = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letrasMinus = "abcdefghijklmnopqrstuvwxyz";
    const CaracEspeciais = "!@#$%^&*(),.?\":{}|<>";

    input.addEventListener('input', function () {
        let temNumero = false;
        let temMaiuscula = false;
        let temMinuscula = false;
        let temCaracEspeciais = false;        
        const senha = input.value;


        for (let i = 0; i < senha.length; i++) {
                if (numeros.includes(senha[i])) temNumero = true;
                if (letrasMaius.includes(senha[i])) temMaiuscula = true;
                if (letrasMinus.includes(senha[i])) temMinuscula = true;
                if (CaracEspeciais.includes(senha[i])) temCaracEspeciais = true;
            }
            
            if (temNumero && temMaiuscula && temMinuscula && temCaracEspeciais && senha.length >= 8) {
                p.textContent = "Senha forte";
            } else {
                p.textContent = "Senha fraca";
            }
    })


})