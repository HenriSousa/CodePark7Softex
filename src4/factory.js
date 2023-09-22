class Computador {
    #ram; #hdd; #cpu; #type
    constructor(ram, hdd, cpu, type) {
        this.#ram = ram;
        this.#hdd = hdd;
        this.#cpu = cpu;
        this.#type = type;
    }

    get getRam() {
        return this.#ram;
    }

    set setRam(value) {
        this.#ram = value;
    }

    get getHdd() {
        return this.#hdd;
    }

    set setHdd(value) {
        this.#hdd = value;
    }

    get getCpu() {
        return this.#cpu;
    }

    set setCpu(value) {
        this.#cpu = value;
    }

    get getType() {
        return this.#type;
    }

    set setType(value) {
        this.#type = value;
    }

    toString() {
        console.log(`Memoria RAM: ${this.#ram}GB`)
        console.log(`HD: ${this.#hdd}GB`)
        console.log(`CPU: ${this.#cpu}GHz`)
        console.log(`Type: ${this.#type}`)
    }
}

module.exports = Computador;

