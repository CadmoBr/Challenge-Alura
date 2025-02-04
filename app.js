let nomes = [];
let resultado = document.getElementById("resultado");

function adicionarAmigo() {
    let digiteUmNome = document.getElementById("amigo").value.trim();
    
    // Expressão regular para permitir apenas letras e espaços
    let regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

    if (digiteUmNome === "") {
        alert("Erro! O campo está vazio. Digite os nomes de seus amigos para começar.");
        return;
    } 
    
    if (!regex.test(digiteUmNome)) {
        alert("Erro! Digite apenas letras e sem números ou caracteres especiais.");
        return;
    }

    nomes.push(digiteUmNome);
    document.getElementById("amigo").value = "";

    let listaDeNomes = "<ul>";
    for (let i = 0; i < nomes.length; i++) {
        listaDeNomes += `<li>${nomes[i]}</li>`;
    }
    listaDeNomes += "</ul>";
    resultado.innerHTML = listaDeNomes;
}

function sortearAmigo() {
    if (nomes.length < 2) {
        resultado.innerHTML += `Digite pelo menos 2 amigos.`;
    } else {
        let aleatorio = Math.floor(Math.random() * nomes.length);
        let nomeSorteado = nomes[aleatorio];
        resultado.innerHTML = `🎉🎉 Parabéns!! O Nome Sorteado foi: <strong>${nomeSorteado}</strong>`;
    }
}

function reiniciar() {
    document.getElementById("amigo").value = "";
    resultado.innerHTML = "";
    nomes = [];
}
