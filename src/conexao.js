const express = require('express');
const app = express();
const rotas = require('./rotas.js');
let port = 8181;

app.use('/id', rotas);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});
