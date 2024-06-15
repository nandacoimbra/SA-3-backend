// Importa o módulo que contém a conexão com o banco de dados
const dbConnection = require("../db/dbConnection");

// Define a classe tarefaModel para manipular operações relacionadas às tarefas no banco de dados
class tarefaModel {

  // Método para executar consultas SQL no banco de dados
  executeSQL(sql, parameters = "") {
    // Retorna uma Promise que representa a execução da consulta SQL
    return new Promise( function (resolve, reject) {
        
        // Executa a consulta SQL utilizando a conexão com o banco de dados e os parâmetros fornecidos
        dbConnection.query(sql, parameters, function (error, resposta) {
          // Se ocorrer um erro durante a execução da consulta, rejeita a Promise com o erro
          if (error) {
            return reject(error);
          }
          // Se a consulta for bem-sucedida, resolve a Promise com a resposta do banco de dados
          return resolve(resposta);
        });

      }
    );
  }

 
  // ----------------------------------------------------------------------------------------------
  // Integração API
  // ----------------------------------------------------------------------------------------------

  // Método para obter a lista de todas as tarefas no banco de dados
  apiReadList() {
    const sql = "SELECT id, descricao, situacao, data_abertura, data_conclusao FROM tarefa"; // Consulta SQL para selecionar todas as tarefas
    return this.executeSQL(sql); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para obter uma tarefa específica por ID no banco de dados
  apiRead(id) {
    const sql = "SELECT id, descricao, situacao, data_abertura, data_conclusao FROM tarefa WHERE id = ?"; // Consulta SQL para selecionar uma tarefa por ID
    return this.executeSQL(sql, id); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para criar uma nova tarefa no banco de dados
  apiCreate(newTarefa) {
    const sql = "INSERT INTO tarefa SET ?"; // Consulta SQL para inserir uma nova tarefa
    return this.executeSQL(sql, newTarefa); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para atualizar uma tarefa existente por ID no banco de dados
  apiUpdate(updatedTarefa, id) {
    const sql = "UPDATE tarefa SET ? WHERE id = ?"; // Consulta SQL para atualizar uma tarefa por ID
    return this.executeSQL(sql, [updatedTarefa, id]); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para excluir uma tarefa existente por ID no banco de dados
  apiDelete(id) {
    const sql = "DELETE FROM tarefa WHERE id = ?"; // Consulta SQL para excluir uma tarefa por ID
    return this.executeSQL(sql, id); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  
  // ----------------------------------------------------------------------------------------------
  // Integração Front End x Back End
  // ----------------------------------------------------------------------------------------------
  
  // Método para obter a lista de todas as tarefas no banco de dados
  readList() {
    const sql = "SELECT id, descricao, situacao, data_abertura, data_conclusao FROM tarefa"; // Consulta SQL para selecionar todas as tarefas
    return this.executeSQL(sql); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para obter uma tarefa específica por ID no banco de dados
  read(id) {
    const sql = "SELECT id, descricao, situacao, data_abertura, data_conclusao FROM tarefa WHERE id = ?"; // Consulta SQL para selecionar uma tarefa por ID
    return this.executeSQL(sql, id); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para criar uma nova tarefa no banco de dados
  create(newTarefa) {
    const sql = "INSERT INTO tarefa (descricao, situacao, data_abertura, data_conclusao) VALUES (?, ?, ?, ?)"; // Consulta SQL corrigida para inserir uma nova tarefa
    const values = [newTarefa.descricao, newTarefa.situacao, newTarefa.data_abertura, newTarefa.data_conclusao]; // Valores a serem inseridos na consulta SQL
    return this.executeSQL(sql, values); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para atualizar uma tarefa existente por ID no banco de dados
  update(updatedTarefa, id) {
    const sql = "UPDATE tarefa SET descricao = ?, situacao = ?, data_abertura = ?, data_conclusao = ? WHERE id = ?"; // Consulta SQL para atualizar uma tarefa por ID
    const values = [updatedTarefa.descricao, updatedTarefa.situacao, updatedTarefa.data_abertura, updatedTarefa.data_conclusao, id]; // Valores a serem inseridos na consulta SQL
    return this.executeSQL(sql, values); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para excluir uma tarefa existente por ID no banco de dados
  delete(id) {
    const sql = "DELETE FROM tarefa WHERE id = ?"; // Consulta SQL para excluir uma tarefa por ID
    return this.executeSQL(sql, id); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

}

// Exporta uma instância da classe tarefaModel para ser utilizada em outros arquivos do projeto
module.exports = new tarefaModel();
