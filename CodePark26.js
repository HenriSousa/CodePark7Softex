var prompt = require("prompt-sync")();

var n1 = parseInt(prompt("Digite sua nota entre (0 e 10): "))
var n2 = parseInt(prompt("Digite sua nota entre (0 e 10): "))
var n3 = parseInt(prompt("Digite sua nota entre (0 e 10): "))
var media = (n1+n2+n3) / 3;

console.log("Média = " + media);
