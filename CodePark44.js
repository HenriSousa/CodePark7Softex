const express = require('express');
const app = express();
app.use(express.json());

// Simulando um banco de dados de livros (geralmente seria um banco de dados real)
const livros = [];

// Operação CREATE (Criar um novo livro)
app.post('/livros', (req, res) => {
  const { nome, autor, isbn } = req.body;
  const novoLivro = {
    id: livros.length + 1,
    nome,
    autor,
    isbn,
  };
  livros.push(novoLivro);
  res.status(201).json(novoLivro);
});

// Operação READ (Ler um livro específico)
app.get('/livros/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const livro = livros.find((livro) => livro.id === id);
  if (livro) {
    res.json(livro);
  } else {
    res.status(404).json({ mensagem: 'Livro não encontrado' });
  }
});

// Operação UPDATE (Atualizar um livro específico)
app.put('/livros/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const livroIndex = livros.findIndex((livro) => livro.id === id);
  if (livroIndex !== -1) {
    const { nome, autor, isbn } = req.body;
    livros[livroIndex] = { ...livros[livroIndex], nome, autor, isbn };
    res.json(livros[livroIndex]);
  } else {
    res.status(404).json({ mensagem: 'Livro não encontrado' });
  }
});

// Operação DELETE (Excluir um livro específico)
app.delete('/livros/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const livroIndex = livros.findIndex((livro) => livro.id === id);
  if (livroIndex !== -1) {
    livros.splice(livroIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ mensagem: 'Livro não encontrado' });
  }
});

// Inicializa o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor em execução na porta ${PORT}`);
});
