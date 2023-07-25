const prompt = require('prompt-sync')();
let numero = prompt("Digite o numero que você deseja o resultado da Tabuada: ")

for(i=1; i<=10; i++){
    console.log(numero + " * " + i + " = " + numero*i)
}
