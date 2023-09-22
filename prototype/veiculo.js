class Veiculo {
    constructor(modelo, marca, cor, numeroRodas) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
    }
    clone(){
        return new this.constructor(this.modelo, this.marca, this.cor, this.numeroRodas)
    }
    represent(){
        return `Modelo: ${this.modelo}\nMarca: ${this.marca}\nCor: ${this.cor}\nNúmero de Rodas: ${this.numeroRodas}`
    }
}

class Carro extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
        super(modelo, marca, cor, numeroRodas);
        this.numeroPortas = numeroPortas;        
    }

    represent() {
        return `${super.represent()}\nNúmero de Portas: ${this.numeroPortas}`
    }
}

class Onibus extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, numeroPassageiros) {
        super(modelo, marca, cor, numeroRodas);
        this.numeroPassageiros = numeroPassageiros;
    }

    represent() {
        return `${super.represent()}\nNúmero de Passageiros: ${this.numeroPassageiros}`
    }
}

class Aplicacao {
    constructor() {
        this.veiculos = [];
            
        const carro1 = new Carro("Sedan", "Toyota", "Azul", 4, 4);
        const carro2 = new Carro("SUV", "Honda", "Prata", 4, 5);
        const onibus1 = new Onibus("Mercedes-Benz", "Mercedes-Benz O 500 RSD", "Branco", 6, 38);
        const onibus2 = new Onibus("Volvo", "Volvo B8R", "Preto", 6, 41);
            
        this.veiculos.push(carro1, carro2, onibus1, onibus2);
    }

    cloneVeiculos() {
        const clones = [];
        for (const veiculo of this.veiculos) {
            clones.push(veiculo.clone());
        }
        return clones;
    }

    imprimirVeiculos() {
        const clones = this.cloneVeiculos();
        for (const veiculo of clones) {
            console.log(veiculo.represent())
        }
    }
}

const app = new Aplicacao();

app.imprimirVeiculos();
