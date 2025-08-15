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
                let j = senha[i];
                if (numeros.includes(j)) temNumero = true;
                if (letrasMaius.includes(j)) temMaiuscula = true;
                if (letrasMinus.includes(j)) temMinuscula = true;
                if (CaracEspeciais.includes(j)) temCaracEspeciais = true;
            }
            
            if (temNumero && temMaiuscula && temMinuscula && temCaracEspeciais && senha.length >= 8) {
                p.textContent = "Senha forte";
            } else {
                p.textContent = "Senha fraca";
            }
    })


})