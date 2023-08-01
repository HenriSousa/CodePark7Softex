// Criar as três listas
const nomes = ['Alice', 'Bob', 'Carlos', 'Diana', 'Eva', 'Fernando', 'Gabriel', 'Helen', 'Isabela', 'João'];
const idades = [25, 30, 22, 28, 31, 20, 24, 27, 29, 26];
const coresFavoritas = ['vermelho', 'azul', 'verde', 'amarelo', 'roxo', 'laranja', 'preto', 'branco', 'rosa', 'cinza'];

// Imprimir as listas iniciais
console.log('Lista de nomes:', nomes);
console.log('Lista de idades:', idades);
console.log('Lista de cores favoritas:', coresFavoritas);

// Realizar modificações
idades[2] = 23; // Alterar a idade do Carlos para 23
coresFavoritas[6] = 'azul-marinho'; // Alterar a cor favorita do Gabriel para azul-marinho

// Imprimir as listas após as modificações
console.log('Lista de nomes (após as modificações):', nomes);
console.log('Lista de idades (após as modificações):', idades);
console.log('Lista de cores favoritas (após as modificações):', coresFavoritas);
