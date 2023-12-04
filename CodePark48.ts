class SistemaSeguranca {
    private static instancia: SistemaSeguranca;
    private senhaBaseSecreta: string = "SenhaUltraSecreta123";

    private constructor() {}

    public static getInstancia(): SistemaSeguranca {
        if (!SistemaSeguranca.instancia) {
            SistemaSeguranca.instancia = new SistemaSeguranca();
        }
        return SistemaSeguranca.instancia;
    }

    public acessarBaseSecreta(senha: string): void {
        if (senha === this.senhaBaseSecreta) {
            console.log("Acesso concedido à Base Secreta.");
        } else {
            console.log("Acesso negado. Intruso detectado!");
        }
    }
}

// Programa principal
const sistemaSeguranca = SistemaSeguranca.getInstancia();
const agenteSecreto = "007";
const senhaInserida = "SenhaUltraSecreta123";

console.log(`Agente ${agenteSecreto} tentando acessar a Base Secreta...`);

sistemaSeguranca.acessarBaseSecreta(senhaInserida); // Acesso concedido

const senhaIncorreta = "SenhaErrada456";
console.log(`Agente ${agenteSecreto} tentando acessar novamente...`);

sistemaSeguranca.acessarBaseSecreta(senhaIncorreta); // Acesso negado
