class numerosComplexos:
    def __init__(self, real, img):
        self.real = real
        self.img = img

    def __str__(self):
        if self.img >= 0:
            return f"{self.real} + {self.img}i"
        else:
            return f"{self.real} - {abs(self.img)}i"

    def soma(self, outro):
        partReal = self.real + outro.real
        partImg = self.img + outro.img
        return numerosComplexos(partReal, partImg)

    def subtracao(self, outro):
        partReal = self.real - outro.real
        partImg = self.img - outro.img
        return numerosComplexos(partReal, partImg)

    def multiplicacao(self, outro):
        partReal = (self.real * outro.real) - (self.img * outro.img)
        partImg = (self.real * outro.img) + (self.img * outro.real)
        return numerosComplexos(partReal, partImg)

    def divisao(self, outro):
        denominador = (outro.real ** 2 + outro.img ** 2)
        partReal = ((self.real * outro.real) + (self.img * outro.img)) / denominador
        partImg = ((self.img * outro.real) - (self.real * outro.img)) / denominador
        return numerosComplexos(partReal, partImg)