// Componente - Classe base para o sanduíche
class Sanduiche {
    constructor() {
      this.descricao = "Sanduíche";
    }
  
    custo() {
      return 0;
    }
  
    descricaoDoSanduiche() {
      return this.descricao;
    }
  }
  
  // Componente Concreto - Sanduíche de frango assado
  class FrangoAssado extends Sanduiche {
    constructor() {
      super();
      this.descricao = "Sanduíche de Frango Assado";
    }
  
    custo() {
      return 4.5;
    }
  }
  
  // Decorador Concreto - Decorador para o pepperoni
  class Pepperoni extends Sanduiche {
    constructor(sanduiche) {
      super();
      this.sanduiche = sanduiche;
    }
  
    custo() {
      return this.sanduiche.custo() + 0.99;
    }
  
    descricaoDoSanduiche() {
      return `${this.sanduiche.descricaoDoSanduiche()}, Pepperoni`;
    }
  }
  
  // Decorador Concreto - Decorador para o queijo mussarela ralado
  class QueijoMussarelaRalado extends Sanduiche {
    constructor(sanduiche) {
      super();
      this.sanduiche = sanduiche;
    }
  
    custo() {
      return this.sanduiche.custo() + 2.0;
    }
  
    descricaoDoSanduiche() {
      return `${this.sanduiche.descricaoDoSanduiche()}, Queijo Mussarela Ralado`;
    }
  }
  
  // Cliente
  const meuSanduiche = new FrangoAssado(); // Sanduíche de frango assado básico
  const sanduicheComPepperoni = new Pepperoni(meuSanduiche); // Adiciona pepperoni
  const sanduicheFinal = new QueijoMussarelaRalado(sanduicheComPepperoni); // Adiciona queijo mussarela ralado
  
  console.log(`Descrição: ${sanduicheFinal.descricaoDoSanduiche()}`);
  console.log(`Custo: $${sanduicheFinal.custo().toFixed(2)}`);
  