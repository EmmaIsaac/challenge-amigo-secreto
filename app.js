let listaDeAmigos = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
    if (amigo) {
        listaDeAmigos.push(amigo);
        document.getElementById("amigo").value = "";
        mostrarListaDeAmigos();
    } else {
        alert("Por favor, ingresa un nombre.");
    }
    console.log("Lista de amigos inicial:", listaDeAmigos);
}

function mostrarListaDeAmigos() {
    let lista = document.getElementById("listaAmigos");

    // Limpiar el contenido previo
    lista.innerHTML = "";

    for (let i = 0; i < listaDeAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaDeAmigos[i];
        lista.appendChild(li);
    }
}
