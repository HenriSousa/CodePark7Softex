class Carro {
    constructor (marca, modelo, anoFabricacao, anoModelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.anoFabricacao = anoFabricacao;
        this.anoModelo = anoModelo;
    }
    acelerador = 0
    farol = false

    acelerar() {
        this.acelerador++    
    }

    freiar() {
        this.acelerador--
    }

    ligarFarol(){
        if (this.farol == false) {
            farol = true
        } else {
            console.log("O farol já está ligado! ")
        }
    }
}

class Celular {
    constructor (marca, modelo, memoriaRam) {
        this.marca = marca;
        this.modelo = modelo;
        this.memoriaRam = memoriaRam;
    }
    volume = 0
    ligado = false

    ligar() {
        if (ligado == false) {
            this.ligado = true
        } 
    }

    desligar() {
        if (ligado == true) {
            this.ligado = false
            console.log("Desligando...")
        }
    }

    aumentarVolume() {
        this.volume++
    }

    abaixarVolume() {
        this.volume--
    }
}

class MeioDeTransporte {
    constructor(nome, velocidadeMaxima, capacidade) {
      this.nome = nome;
      this.velocidadeMaxima = velocidadeMaxima;
      this.capacidade = capacidade;
    }
  
    acelerar() {
      return `${this.nome} está acelerando para ${this.velocidadeMaxima} km/h.`;
    }
  
    desacelerar() {
      return `${this.nome} está desacelerando.`;
    }
  
    transportarPessoas() {
      return `${this.nome} pode transportar até ${this.capacidade} pessoas.`;
    }
  }

  class VeiculoTerrestre {
    constructor(nome, numeroRodas, capacidade) {
      this.nome = nome;
      this.numeroRodas = numeroRodas;
      this.capacidade = capacidade;
    }
  
    ligar() {
      return `${this.nome} está ligado e pronto para uso.`;
    }
  
    desligar() {
      return `${this.nome} está desligado.`;
    }
  
    transportarCarga(carga) {
      return `${this.nome} pode transportar até ${carga} kg de carga.`;
    }
  }