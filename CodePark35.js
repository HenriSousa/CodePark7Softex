class Carro {
    constructor(modelo, ano) {
        this.modelo = modelo
        this.ano = ano
    }

    get modelo() {
        return this.modelo
    }

    set modelo(novoModelo) {
        this.modelo = novoModelo
    }

    get ano() {
        return this.ano
    }

    set ano(novoAno) {
        this.ano = novoAno
    }

}