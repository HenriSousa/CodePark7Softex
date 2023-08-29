const prompt = require("prompt-sync")();

let valor1 = parseInt(prompt("Digite o primeiro valor: "))
let valor2 = parseInt(prompt("Digite o segundo valor: "))
console.log("Escolha o operador:\nSoma = +\nSubtração = -\nMultiplicação = *\nDivisão = /")
let operador = prompt("Digite a operação que deseja fazer: ")

switch(operador) {
    case "+":
        soma = valor1 + valor2
        console.log(valor1 + " + " + valor2 + " = " + soma);
        break;
    case "-":
        subtracao = valor1 - valor2
        console.log(valor1 + " - " + valor2 + " = " + subtracao);
        break;
    case "*":
        multiplicacao = valor1 * valor2
        console.log(valor1 + " * " + valor2 + " = " + multiplicacao);
        break;
    case "/":
        divisao = valor1 / valor2
        resto = valor1%valor2
        console.log(valor1 + " / " + valor2 + " = " + divisao);
        console.log("Resto = " + resto);
        break;
}