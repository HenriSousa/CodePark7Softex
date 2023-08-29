const prompt = require("prompt-sync")();

// Primeiro Programa
/*
var notas = [];
var soma = 0;
var media;

for(let i = 0; i<3; i++) {
    let nota = parseFloat(prompt("Digite sua " + [i+1] + "° nota: "))
    notas[i] = nota;
}

notas.forEach(element => {
    soma += element
});

media = soma / 3;

console.log(media >= 7? "Aprovado!" : "Reprovado!");
*/

// Segundo Programa
var n1 = parseFloat(prompt("Digite sua 1° nota: "));
var n2 = parseFloat(prompt("Digite sua 2° nota: "));
var media = (n1 + n2) / 3;
var falta = 7 - media;
var resultado = (media >= 7) ? "Você foi Aprovado!" : "Falta " + falta.toFixed(2) + " para aprovação!" 

console.log(resultado);