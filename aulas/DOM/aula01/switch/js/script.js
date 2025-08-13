// Aguarda o carregamento completo do conteúdo HTML antes de executar o código
document.addEventListener('DOMContentLoaded', function(){
    // Obtém a referência ao botão com id
    const botao = document.getElementById('btnMostrarDia');

    // Obtém a referência ao campo de entrada com id 
    const entrada = document.getElementById('numeroDia');

    // Obtém a referência ao elemento onde o resultado será exibido (com id "resultado")
    const saida = document.getElementById('respostaDia');

    // Adiciona um ouvinte de evento ao botão para reagir ao clique
    botao.addEventListener('click', function(){

        const numero = parseInt(entrada.value);
        
        switch (numero) {
            case 1:
                saida.textContent = 'Domingo';
                break;

            case 2:
                saida.textContent = 'segunda-feira';
                break;
                
            case 3:
                saida.textContent = 'Terça-Feira';
                break;

            default:
                saida.textContent = 'Número inválido!'
                break;
        }
    })
})