class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
      this.filho = null;
    }
  }
  
  class ListaPessoas {
    constructor() {
      this.head = null;
    }
  
    adicionarPessoa(nome, idade) {
      const novaPessoa = new Pessoa(nome, idade);
      novaPessoa.filho = this.head;
      this.head = novaPessoa;
    }
  
    imprimirPessoas() {
      let atual = this.head;
      while (atual !== null) {
        console.log(`Nome: ${atual.nome}, Idade: ${atual.idade}`);
        atual = atual.filho;
      }
    }
  }

const listaPessoas = new ListaPessoas();
listaPessoas.adicionarPessoa("Fulano", 21);
listaPessoas.adicionarPessoa("Ciclano", 28);
listaPessoas.adicionarPessoa("Beltrano", 35);

listaPessoas.imprimirPessoas();