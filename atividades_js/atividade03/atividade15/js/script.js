async function buscarUsuario() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ nome: "João", idade: 25 });
        }, 2000);
    });
}

async function mostrarUsuario() {
    const usuario = await buscarUsuario();
    console.log(usuario);
}
mostrarUsuario();