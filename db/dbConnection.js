// Importa o módulo 'mysql' para interagir com um banco de dados MySQL
const mysql = require("mysql");

// Cria uma conexão com o banco de dados MySQL utilizando as configurações especificadas
const sqlConnection = mysql.createConnection({
  host: "localhost",       // Host onde o banco de dados está sendo executado (geralmente "localhost" para desenvolvimento local)
  port: 3306,              // Porta utilizada para se conectar ao banco de dados MySQL
  user: "root",            // Nome de usuário para autenticação no banco de dados
  password: "admin",       // Senha do usuário para autenticação no banco de dados
  database: "db_tarefa",      // Nome do banco de dados a ser utilizado
});

// Exporta a conexão criada para que possa ser utilizada em outros arquivos do projeto
module.exports = sqlConnection;