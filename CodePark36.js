class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

class Funcionario extends Pessoa {
    constructor(nome, idade, cargo, salario){
        super(nome, idade)
        this.cargo = cargo
        this.salario = salario
    }
}