const prompt = require("prompt-sync")();

function bemVindo() {
    return ("Hello World!");
}

function nomeCompleto (nome, sobrenome) {
    return nome + " " + sobrenome;
}

const anoAtual = new Date().getFullYear();
const idade = (n1, n2) => n1 - n2;

var nome = prompt("Digite seu nome: ");
var sobrenome = prompt("Digite seu Sobreome: ");
var anoNascimento =  parseInt(prompt("Digite o ano que você nasceu: "));

console.log(bemVindo() + " " + nomeCompleto(nome, sobrenome));
console.log("Você tem " + idade(anoAtual, anoNascimento) + " anos de idade!");
