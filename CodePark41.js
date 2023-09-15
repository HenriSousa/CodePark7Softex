const prompt = require('prompt-sync')();

function divisao (n1, n2) {
    return ("Resultado da divisão: " + n1/n2)
}

let valor1 = parseFloat(prompt("Digite o valor que vai ser dividido: "))
let valor2 = parseFloat(prompt("Por quanto você quer dividir esse valor: "))

try {
    console.log(divisao(valor1, valor2))
} catch (error) {
    console.error("Error: ", error.message);
} finally {
    console.log("Operação Realizada!")
}