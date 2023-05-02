const express = require('express')
const app = express()
const port = 3000

// Inclui Nome com Valor Randomico na Tabela

const config = {
    host: 'dbnode',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql_i = require('mysql')
const connection = mysql_i.createConnection(config)
const sql1 = `INSERT INTO people (name) select concat( 
    UCASE(char(round(rand()*25)+97)),
    char(round(rand()*25)+97),
    char(round(rand()*25)+97),
    char(round(rand()*25)+97),
    char(round(rand()*25)+97),
    char(round(rand()*25)+97),
    char(round(rand()*25)+97),
    char(round(rand()*25)+97)
)`

connection.query(sql1)
connection.end()

// Obtem Lista de Dados da Tabela

var mysql = require('mysql');
const { connected } = require('process')

var con = mysql.createConnection({
    host: 'dbnode',
    user: 'root',
    password: 'root',
    database: 'nodedb'
  });

app.get('/', (req, res) => {
    
    con.connect(function(err) {
        if (err) throw err;
        // Se conectado com sucesso
        con.query("SELECT * FROM people", function (err, result, fields) {
          // Se aconteceu algum erro - encerra a execucao
          if (err) throw err;
          // Caso nao tenha ocorrido erro, obtem lista de dados da tabela  e concatena
          var resultados = '<p><b>Nomes</b></p>'
          Object.keys(result).forEach(function(key) {
            var row = result[key];
            console.log(row.name)
            resultados = resultados + '<p>' + row.name + '</p>'
          });
          res.send('<h1>Full Cycle by RenoKolbe</h1><p>'+ resultados+'</p')
        });
      });

})

app.listen(port, () => {
    console.log("Rodando na porta " + port)
})