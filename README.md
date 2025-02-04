# Challenge-Alura
Sorteador de Amigos 🎉

Este é um simples projeto em JavaScript que permite adicionar nomes de amigos, armazená-los em uma lista e sortear aleatoriamente um deles. Além disso, garante que apenas nomes válidos sejam inseridos, bloqueando números e caracteres especiais.

📌 Funcionalidades

Adicionar nomes à lista (somente letras e espaços são aceitos);

Sortear um nome aleatoriamente;

Reiniciar a lista de nomes.

🚀 Tecnologias Utilizadas

HTML

CSS

JavaScript

📋 Como Usar

Digite o nome de um amigo no campo de entrada.

Clique no botão "Adicionar Amigo" para adicioná-lo à lista.

Após adicionar pelo menos dois nomes, clique em "Sortear" para selecionar aleatoriamente um nome da lista.

Para limpar os nomes e começar novamente, clique no botão "Reiniciar".

⚠️ Regras de Validação

O campo não pode estar vazio.

Apenas letras e espaços são permitidos (números e caracteres especiais não são aceitos).

🖥️ Exemplo de Código Principal

function adicionarAmigo() {
    let digiteUmNome = document.getElementById("amigo").value.trim();
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
    atualizarLista();
}

📂 Estrutura do Projeto

📁 SorteadorDeAmigos
├── 📄 index.html
├── 📄 style.css
├── 📄 script.js
├── 📄 README.md

📌 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

📜 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo e modificá-lo conforme necessário.

Feito com ❤️ por José Airton 🚀
