const mysql = require('mysql2');

// Configurações de conexão com o banco de dados
const connection = mysql.createConnection({
    host: acesso.host,
    user: acesso.user,
    password: acesso.password,
    database: acesso.database
});

// Função para inserir produtos na tabela
async function inserirProdutos() {
  try {
    await connection.execute(
      'INSERT INTO Produtos (Nome, Preco, Quantidade) VALUES (?, ?, ?), (?, ?, ?), (?, ?, ?)',
      ['Smartphone', 799.99, 20, 'Tablet', 349.99, 10, 'Fone de Ouvido', 49.99, 50]
    );
    console.log('Produtos inseridos com sucesso!');
  } catch (error) {
    console.error('Erro ao inserir produtos:', error);
  }
}

// Função para atualizar o estoque e o preço do Smartphone
async function atualizarSmartphone() {
  try {
    await connection.execute(
      'UPDATE Produtos SET Quantidade = ?, Preco = ? WHERE Nome = ?',
      [25, 849.99, 'Smartphone']
    );
    console.log('Estoque e preço do Smartphone atualizados com sucesso!');
  } catch (error) {
    console.error('Erro ao atualizar o Smartphone:', error);
  }
}

// Função para simular a venda de produtos
async function venderProdutos() {
  try {
    await connection.beginTransaction(); // Inicia uma transação

    // Simula a venda do Tablet
    await connection.execute(
      'UPDATE Produtos SET Quantidade = Quantidade - ? WHERE Nome = ?',
      [5, 'Tablet']
    );

    // Simula a venda do Fone de Ouvido
    await connection.execute(
      'UPDATE Produtos SET Quantidade = Quantidade - ? WHERE Nome = ?',
      [10, 'Fone de Ouvido']
    );

    await connection.commit(); // Confirma a transação
    console.log('Venda de produtos concluída com sucesso!');
  } catch (error) {
    await connection.rollback(); // Reverte a transação em caso de erro
    console.error('Erro ao realizar a venda de produtos:', error);
  }
}

// Chamar as funções para realizar as operações
inserirProdutos();
atualizarSmartphone();
venderProdutos();
