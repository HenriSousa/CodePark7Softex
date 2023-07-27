const prompt = require('prompt-sync')();

let quantidade_rodas = parseInt(prompt("Digite a quantidade de rodas do veículo: "));
let peso_kg = parseFloat(prompt("Digite o peso do Veículo: "));
let quantidade_passageiros = parseInt(prompt("Digite a quantidade de passageiros que o veíuclo suporta: "));

if (quantidade_rodas <= 3) {
    console.log("Categoria de Habilitação A!")
} else if (quantidade_rodas == 4 && quantidade_passageiros <= 8 && peso_kg <= 3500) {
    console.log("Categoria de Habilitação B!")
} else if (peso_kg >= 3500 || peso_kg <= 6000) {
    console.log("Categoria de Habilitação C!")
} else if (quantidade_passageiros > 8) {
    console.log("Categoria de Habilitação D!")
} else {
    console.log("Categoria de Habilitação E!")
}
