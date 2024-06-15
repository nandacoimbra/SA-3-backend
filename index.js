// Importa o módulo Express
const express = require("express");

//  Cria uma instância do aplicativo Express
const app = express();

//  Define a porta em que o servidor será executado
//  Dessa forma, o servidor será acessível em http://localhost:3000
const port = 3000;


// Importa e executa a função do módulo 'database' localizado no diretório 'db'
const database = require("./db/index.js");
database();

// Define a engine de visualização como EJS
// EJS é uma linguagem de modelagem que permite a incorporação de código JavaScript dentro de arquivos HTML, facilitando a geração de conteúdo dinâmico. 
// Ao definir 'view engine' como 'ejs', o Express será capaz de usar arquivos EJS para renderizar as respostas às requisições do cliente.
app.set('view engine', 'ejs');

// Importa o módulo 'index.js' localizado no diretório 'routers' e atribui à variável 'router'
const router = require("./routers/index.js");

// Chama a função exportada pelo módulo 'index.js' e passa a instância do Express como argumento
// Adicionando as rotas definidas ao aplicativo Express
router(app, express);

// A função .listen() é uma função do Express que inicia o servidor
// E começa a ouvir em uma porta específica.
app.listen(
  port, // O primeiro argumento é a porta em que o servidor irá ouvir
  function (error) {
    // O segundo argumento é uma função de callback que será executada
    // Assim que o servidor estiver pronto para aceitar conexões.
    // Essa função de callback é chamada quando o servidor é iniciado.

    // O parâmetro error é passado para a função, e este parâmetro conterá um valor
    // Caso ocorra algum erro durante a inicialização do servidor.
    if (error) {
      // Se ocorreu um erro, exibe uma mensagem de erro
      console.log("Ocorreu um erro ao rodar o servidor!");
      return;
    } else {
      // Se não ocorreu erro, exibe uma mensagem de sucesso
      console.log("Servidor rodando com sucesso!");
    }
  }
);
