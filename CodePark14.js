const prompt = require("prompt-sync")();

var operacao = 0;
var numero1 = 0;
var numero2 = 0;

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
    }
}

do {
    var operacao = parseInt(prompt("Escolha uma opção do que deseja fazer:\n1: Soma\n2: Subtração\n3: Multiplicação\n4: Divisão\n0: Sair\n"));
    if(operacao != 0) {
        var numero1 = parseFloat(prompt("Digite o 1° número: "));
        var numero2 = parseFloat(prompt("Digite o 2° número: "));
    }
    let resultado = (calculadora(numero1, numero2, operacao));
    console.log(resultado);
} while ( operacao != 0 )
