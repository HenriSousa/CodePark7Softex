const prompt = require("prompt-sync")();

function calculadora(n1, n2, op) {
    switch(op) {
        case 1:
            console.log(n1, " + ", n2, " = ", n1 + n2);
            break;
        case 2:
            console.log(n1, " - ", n2, " = ", n1 - n2);
            break;
        case 3:
            console.log(n1, " * ", n2, " = ", n1 * n2);
            break;
        case 4:
            console.log(n1, " / ", n2, " = ", n1 / n2);
            break;
        default:
            console.log(0);
            break;
    }
}

let numero1 = parseFloat(prompt("Digite o 1° número: "));
let operacao = parseInt(prompt("Escolha uma operação pelo número: \n1: Soma \n2: Subtração \n3: Multiplicação \n4: Divisão\n"));
let numero2 = parseFloat(prompt("Digite o 2° número: "));
let resultado = (calculadora(numero1, numero2, operacao));

console.log(resultado);
