const mysql = require('mysql2');
const acesso = require('./dadosSql.js');

const connection = mysql.createConnection({
    host: acesso.host,
    user: acesso.user,
    password: acesso.password,
    database: acesso.database
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL: ', err);
    } else {
        console.log('Conexão bem-sucedida!')
    }
})
