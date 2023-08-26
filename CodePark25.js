var prompt = require("prompt-sync")();

//String
var nome = prompt("Digite seu nome: ");
//Integer
var idade = parseInt(prompt("Digite sua idade: "));
//String
var salario = prompt("Digite seu salário: ");
//String
var diploma = prompt("Possui diploma? \nDigite Sim ou Não: ")

console.log("------- CADASTRO -------");
console.log("Nome: " + nome);
console.log("Idade: " + idade);
console.log("Salário: " + salario);
console.log("Possui diploma: " + diploma);
console.log("------------------------");
