// Importa o módulo Router do framework Express
const Router = require("express").Router;

// Cria uma instância de um roteador do Express
// O roteador é usado para definir rotas e manipular requisições HTTP em uma aplicação Express
const router = Router();

// ----------------------------------------------------------------------------------------------
// Métodos HTTP para fazer as requisições
// ----------------------------------------------------------------------------------------------

// Importa o controlador de vagas de emprego
const tarefaController = require("../controllers/tarefaController");


// ----------------------------------------------------------------------------------------------
// Integração API
// ----------------------------------------------------------------------------------------------

// Define uma rota GET para listar todas as vagas de emprego
// Quando uma solicitação GET é feita para "/tarefa", o método readList() do controlador de vagas de emprego é chamado
router.get("/api/tarefa", tarefaController.apiReadList);

// Define uma rota GET para ler uma vaga de emprego específica por ID
// Quando uma solicitação GET é feita para "/tarefa/:id", o método read() do controlador de vagas de emprego é chamado,
// onde ":id" é um parâmetro na URL que representa o ID da vaga de emprego
router.get("/api/tarefa/:id", tarefaController.apiRead);

// Define uma rota POST para criar uma nova vaga de emprego
// Quando uma solicitação POST é feita para "/tarefa", o método create() do controlador de vagas de emprego é chamado
router.post("/api/tarefa", tarefaController.apiCreate);

// Define uma rota PUT para atualizar uma vaga de emprego existente por ID
// Quando uma solicitação PUT é feita para "/tarefa/:id", o método update() do controlador de vagas de emprego é chamado,
// onde ":id" é um parâmetro na URL que representa o ID da vaga de emprego
router.put("/api/tarefa/:id", tarefaController.apiUpdate);

// Define uma rota DELETE para excluir uma vaga de emprego existente por ID
// Quando uma solicitação DELETE é feita para "/tarefa/:id", o método delete() do controlador de vagas de emprego é chamado,
// onde ":id" é um parâmetro na URL que representa o ID da vaga de emprego
router.delete("/api/tarefa/:id", tarefaController.apiDelete);


// ----------------------------------------------------------------------------------------------
// Integração Front End x Back End
// ----------------------------------------------------------------------------------------------

// Define uma rota GET para visualizar o formulário de criação de uma nova vaga de emprego
router.get("/tarefa/create", tarefaController.viewCreate);

// Define uma rota GET para listar todas as vagas de emprego
router.get("/tarefa", tarefaController.viewReadList);

// Define uma rota GET para visualizar o formulário de atualização de uma vaga de emprego existente
router.get("/tarefa/update/:id", tarefaController.viewUpdate);

// Define uma rota GET para acessar a página inicial
router.get("/", tarefaController.viewHomePage);

// Define uma rota POST para criar uma nova vaga de emprego
router.post("/tarefa", tarefaController.create);

// Define uma rota POST para atualizar uma vaga de emprego existente por ID, onde ":id" é um parâmetro na URL que representa o ID da vaga de emprego
router.post("/tarefa/:id", tarefaController.update);

// Define uma rota GET para realizar a exclusão de uma vaga de emprego existente
router.get("/tarefa/delete/:id", tarefaController.delete);

// Exporta o objeto router (roteador)
// O roteador contém definições de rotas e controles para as diferentes solicitações HTTP.
module.exports = router;
