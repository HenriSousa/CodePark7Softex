const prompt = require("prompt-sync")();

var nome, ano_nascimento;
ano_certo = false;

while(ano_certo == false) {
    try {
        var nome = prompt("Digite seu nome completo: ");
        var ano_nascimento = parseInt(prompt("Digite o ano em que você nasceu: "));
        if (ano_nascimento >= 1922 && ano_nascimento <= 2022) {
            console.log("Nome do usuário: " + nome);
            console.log("Idade do usuário: " + (2023 - ano_nascimento))
            ano_certo = true;
        } else {
            console.log("Digite o ano entre 1922 e 2022: ")
        }
    } catch(error) {
        console.log("Digite o ano corretamente!")
    }
}






