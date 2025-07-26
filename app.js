let listaDeAmigos = [];
let lista = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
    if (amigo) {
        listaDeAmigos.push(amigo);
        document.getElementById("amigo").value = "";
        mostrarListaDeAmigos();
    } else {
        alert("Por favor, ingresa un nombre.");
    }
}

function mostrarListaDeAmigos() {
    // Limpiar el contenido previo
    lista.innerHTML = "";

    for (let i = 0; i < listaDeAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaDeAmigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    } else {
        let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
        let amigoSorteado = listaDeAmigos[indiceAleatorio];
        lista.innerHTML = "";
        mostrarResultado(amigoSorteado);
    }
}

function mostrarResultado(amigoSorteado) {
    let li = document.createElement("li");
    li.textContent = `Tu amigo sorteado es: "${amigoSorteado}"`;
    resultado.appendChild(li);
}
