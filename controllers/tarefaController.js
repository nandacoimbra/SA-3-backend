// Importa o modelo de Tarefa (tarefa) para acessar as operações CRUD relacionadas a empregos
const tarefaModel = require("../models/tarefaModel");

// Define a classe TarefaController, responsável por controlar as operações relacionadas a empregos
class TarefaController {
 
  // ----------------------------------------------------------------------------------------------
  // Integração API
  // ----------------------------------------------------------------------------------------------

  // Método para ler a lista de todas as tarefas
  apiReadList(req, res) {
    // Chama a função apiReadList() do modelo tarefaModel para obter a lista de tarefas
    const retorno = tarefaModel.apiReadList();
    return retorno
      .then((result) => result.length == 0
        ? res.status(404).send("Nenhuma tarefa foi encontrada!")
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para ler uma tarefa específica por ID
  apiRead(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Chama a função apiRead() do modelo tarefaModel para obter a tarefa com o ID fornecido
    const retorno = tarefaModel.apiRead(id);
    return retorno
      .then((result) =>
        result.length == 0 
        ? res.status(404).send("Tarefa não encontrada!") 
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para criar uma nova tarefa
  apiCreate(req, res) {
    // Obtém os dados da nova tarefa do corpo da requisição
    const reqBody = req.body; 
    // Chama a função apiCreate() do modelo tarefaModel para criar uma nova tarefa
    const retorno = tarefaModel.apiCreate(reqBody);
    return retorno
      .then((result) =>
        res.status(201).send("Tarefa criada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para atualizar uma tarefa existente por ID
  apiUpdate(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Obtém os dados atualizados da tarefa do corpo da requisição
    const reqBody = req.body;
      
    // Chama a função apiUpdate() do modelo tarefaModel para atualizar a tarefa com o ID fornecido
    const retorno = tarefaModel.apiUpdate(reqBody, id);
    return retorno
      .then((result) =>
        res.status(200).send("Tarefa atualizada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));

  }

  // Método para excluir uma tarefa existente por ID
  apiDelete(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Chama a função apiDelete() do modelo tarefaModel para excluir a tarefa com o ID fornecido
    const retorno = tarefaModel.apiDelete(id);
    return retorno
      .then((result) =>
        res.status(200).send("Tarefa deletada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }

  
  // ----------------------------------------------------------------------------------------------
  // Integração Front End x Back End
  // ----------------------------------------------------------------------------------------------

  // Método para visualizar o formulário de criação de uma nova tarefa
  viewCreate(req, res) {
    return res.status(200).render("./tarefa/tarefa_create", { title: "Adicionar Tarefa" });
  }
  
  // Método para listar todas as tarefas
  viewReadList(req, res) {
    // Chama a função readList() do modelo tarefaModel para obter a lista de tarefas
    const tarefasList = tarefaModel.readList();
    return tarefasList
      .then((result) =>
        result.length == 0
          ? res.status(404).render("./tarefa/tarefa_read", { title: "Tarefas", tarefas: result })
          : res.status(200).render("./tarefa/tarefa_read", { title: "Tarefas", tarefas: result })
      )
      .catch((error) => res.status(400).send(error.message));  
  }

  // Método para visualizar o formulário de atualização de uma tarefa existente
  viewUpdate(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Chama a função read() do modelo tarefaModel para obter a tarefa com o ID fornecido
    const tarefa = tarefaModel.read(id);
    return tarefa
      .then((result) =>
        result.length == 0
          ? res.status(404).redirect("/")
          : res.status(200).render("./tarefa/tarefa_update", { title: "Atualizar Tarefa", tarefas: result })
      )
      .catch((error) => res.status(400).send(error.message));  
  }

  // Método para visualizar a página inicial
  viewHomePage(req, res) {
    return res.status(200).render("./index", { title: "Página Inicial"});
  }

  // Método para criar uma nova tarefa
  create(req, res) {
    // Obtém os dados da nova tarefa do corpo da requisição
    const newTarefa = req.body;
    // Chama a função create() do modelo tarefaModel para criar uma nova tarefa
    const tarefa = tarefaModel.create(newTarefa);
    return tarefa
      .then((result) => res.status(201).send("<script> alert('Tarefa criada com sucesso!'); window.location='/tarefa' </script>"))
      .catch((error) => res.status(400).send(error.message));    
  }

  // Método para atualizar uma tarefa existente por ID
  update(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Obtém os dados atualizados da tarefa do corpo da requisição
    const updatedTarefa = req.body;
    // Chama a função update() do modelo tarefaModel para atualizar a tarefa com o ID fornecido
    const tarefa = tarefaModel.update(updatedTarefa, id);
    return tarefa
      .then((result) => res.status(200).send("<script> alert('Tarefa atualizada com sucesso!'); window.location='../../tarefa' </script>"))
      .catch((error) => res.status(400).send(error.message));   
  }

  // Método para excluir uma tarefa existente por ID
  delete(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Chama a função delete() do modelo tarefaModel para excluir a tarefa com o ID fornecido
    const tarefa = tarefaModel.delete(id);
    return tarefa
      .then((result) => res.status(200).send("<script> alert('Tarefa excluída com sucesso!'); window.location='../../tarefa' </script>"))
      .catch((error) => res.status(400).send(error.message));  
  }

}

// Exporta uma instância da classe TarefaController para ser utilizada em outros arquivos do projeto
module.exports = new TarefaController();
