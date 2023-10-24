import java.util.Scanner;
import funcaoCal;

public class Calculadora {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Digite o primeiro número: ");
        int num1 = scanner.nextInt();
        System.out.print("Digite o segundo número: ");
        int num2 = scanner.nextInt();
        System.out.print("Digite a operação (soma, subtracao, multiplicacao): ");
        String operacao = scanner.next().toLowerCase();

        // Defina qual estratégia será usada com base na operação informada
        Strategy estrategia;
        switch (operacao) {
            case "soma":
                estrategia = new SomaStrategy();
                break;
            case "subtracao":
                estrategia = new SubtracaoStrategy();
                break;
            case "multiplicacao":
                estrategia = new MultiplicacaoStrategy();
                break;
            default:
                System.out.println("Operação não suportada.");
                return;
        }

        // Execute a operação e imprima o resultado
        int resultado = estrategia.execute(num1, num2);
        System.out.println("Resultado da " + operacao + ": " + resultado);
    }
}
