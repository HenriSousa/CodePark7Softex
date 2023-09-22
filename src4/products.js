const Computador = require('./factory.js');
const prompt = require('prompt-sync')();

function modelo(ram, hdd, cpu) {    
    ram = parseInt(prompt("Digite o tamanhno da RAM em GB: "));
    hdd = parseInt(prompt("Digite o tamanhno do HDD em GB: "));
    cpu = parseFloat(prompt("Digite os GHz da CPU: "));
    return {ram, hdd, cpu}
}

class Pc extends Computador {
    constructor(ram, hdd, cpu, type = 'Pc') {
        super(ram, hdd, cpu, type)
    }
}

class Server extends Computador {
    constructor(ram, hdd, cpu, type = 'Server') {
        super(ram, hdd, cpu, type)
    }
}

let tipo = prompt("Digite o tipo entre Pc ou Server: ")

switch(tipo.toLowerCase()) {
    case 'pc':
        const pcModelo = modelo();
        const novoPc = new Pc(pcModelo.ram, pcModelo.hdd, pcModelo.cpu);
        novoPc.toString()
        break;
    case 'server':
        const serverModelo = modelo();
        const novoServer = new Server(serverModelo.ram, serverModelo.hdd, serverModelo.cpu);
        novoServer.toString()
        break;
}

