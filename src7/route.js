const express = require('express');
const app = express();
const port = 3000;

// Middleware para analisar JSON no corpo da requisição
app.use(express.json());

// Rota para o método GET
app.get('/api/resource', (req, res) => {
  res.json({ message: 'Requisição GET bem-sucedida' });
});

// Rota para o método POST
app.post('/api/resource', (req, res) => {
  const data = req.body; // Dados enviados no corpo da requisição
  res.json({ message: 'Requisição POST bem-sucedida', data });
});

// Rota para o método PUT
app.put('/api/resource/:id', (req, res) => {
  const resourceId = req.params.id;
  const data = req.body; // Novos dados a serem atualizados
  res.json({ message: `Requisição PUT bem-sucedida para o recurso com ID ${resourceId}`, data });
});

// Rota para o método DELETE
app.delete('/api/resource/:id', (req, res) => {
  const resourceId = req.params.id;
  res.json({ message: `Requisição DELETE bem-sucedida para o recurso com ID ${resourceId}` });
});

// Iniciar o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor Express ouvindo na porta ${port}`);
});

