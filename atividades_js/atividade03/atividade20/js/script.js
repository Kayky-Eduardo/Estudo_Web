function atenderCliente(callback, nome) {
    callback(nome);
}

function cliente(nome, servico) {
    console.log("Atendendo cliente!");
    console.log(`Cliente atual: ${nome}\nServiço desejado: ${servico}`);
}

const clienteA = (nome) => cliente(nome, "Reclamar de problema na plataforma.");
const clienteB = (nome) => cliente(nome, "Quer o plano premium.");
const clienteC = (nome) => cliente(nome, "Quer cancelar a contratação.");

atenderCliente(clienteA, "kayky");
atenderCliente(clienteB, "ronaldo");
atenderCliente(clienteC, "Peixoto");