const prompt = require("prompt-sync")();

let nome = prompt("Digite o nome do Aluno: ");
let nota1 = parseFloat(prompt("Digite a 1° nota do Aluno " + nome + ": "));
let nota2 = parseFloat(prompt("Digite a 2° nota do Aluno " + nome + ": "));
let media = (nota1 + nota2) / 2;
let quantidade_faltas = parseInt(prompt("Digite a quantidade de faltas que o Aluno " + nome + " teve: "));

if (media < 7) {
    console.log("O aluno " + nome + " foi Reprovado!")
} else if (quantidade_faltas > 3) {
    console.log("O aluno " + nome + " foi Reprovado!")
} else {
    console.log("O aluno " + nome + " foi Aprovado!")
}
