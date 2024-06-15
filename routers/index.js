// Importa o módulo 'tarefaRouter.js' e atribui à variável 'routerJobs'
const routerJobs = require("./tarefaRouter.js");

// Exporta uma função que recebe dois parâmetros: 
// 'app' (instância do Express) e 'express' (módulo Express)
module.exports = function (app, express) {
  // Define um middleware do Express (express.json()) para analisar dados de requisição no formato JSON
  app.use(express.json());
  // Define um middleware do Express (express.urlencoded()) para analisar dados de requisição de formulário HTML e torná-los acessíveis no objeto req.body do Express
  // Ao utilizar este middleware com a configuração { extended: true }, o Express é capaz de analisar corretamente os dados codificados, incluindo arrays e objetos aninhados
  app.use(express.urlencoded({ extended: true }));
  // Adiciona o roteador 'routerJobs' (com as rotas definidas) ao aplicativo Express
  app.use(routerJobs);
};