const prompt = require("prompt-sync")();

function buscar (lista, elemento) {
    for (let i = 0; i<=lista.length; i++) {
        if (lista[i] == elemento) {
            return "O número está no índice " + i;
        } else {
            return "O número não está presente na lista!"
        }
    }
}

let array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];

let numero = parseInt(prompt("Digite o número que deseja verificar: "))

console.log(buscar(array, numero))

