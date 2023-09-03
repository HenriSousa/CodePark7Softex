const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
        console.log("Server OK");
        res.send("Hello World");
    });

router.get('/mostrar-nome', (req, res) => {
    const nome = req.query.nome;
    if (nome) {
        res.send(`Seu nome é: ${nome}`)
    } else {
        res.send("Forneca seu nome na URL para ele aparecer aqui.")
    }
})

module.exports = router;
