const prompt = require("prompt-sync")();

let n1 = parseFloat(prompt("Digite a 1° Nota: "));
let n2 = parseFloat(prompt("Digite a 2° Nota: "));
let media = (n1 + n2) / 2;

if (media >= 7) {
    console.log("Aprovado!")
} else {
    console.log("Reprovado!")
}

