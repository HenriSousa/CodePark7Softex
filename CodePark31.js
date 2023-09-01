const prompt = require("prompt-sync")();

const banco = {
    conta: "12345789",
    saldo: 0,
    tipoDeConta: "Cc",
    agencia: 1234,
    buscarSaldo() {
        console.log(`Seu saldo é de ${this.saldo}`)
    },
    deposito() {
        credito = parseFloat(prompt("Digite a quantia que deseja deposita: "))
        this.saldo += credito;                
    },
    saque() {
        debito = parseFloat(prompt("Digite a quantia que deseja retirar: "))
        this.saldo -= debito;
    },
    numeroConta() {
        console.log(`Número da conta: ${this.conta}`)
    }

}

banco.buscarSaldo();
banco.deposito();
banco.buscarSaldo();
banco.saque();
banco.buscarSaldo();
banco.numeroConta();
