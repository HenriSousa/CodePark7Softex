from numerosComplexos import numerosComplexos

num1 = int(input("Digite o número real do 1° Número Complexo: "))
num2 = int(input("Digite a imagem do 1° Número Complexo: "))
num3 = int(input("Digite o número real do 2° Número Complexo: "))
num4 = int(input("Digite a imagem do 2° Número Complexo: "))

if __name__ == "__main__":
    n1 = numerosComplexos(num1, num2)
    n2 = numerosComplexos(num3, num4)

    print("Número complexo 1:", n1)
    print("Número complexo 2:", n2)

    resultadoSoma = n1.soma(n2)
    print("Soma:", resultadoSoma)

    resultadoSubtracao = n1.subtracao(n2)
    print("Subtração:", resultadoSubtracao)

    resultadoMultiplicacao = n1.multiplicacao(n2)
    print("Multiplicação:", resultadoMultiplicacao)

    resultadoDivisao = n1.divisao(n2)
    print("Divisão:", resultadoDivisao)

