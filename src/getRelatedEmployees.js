const data = require('../data/zoo_data');

// Função que avalia se o id do funcionário informado é Gerente ou não. Consiste em avaliar se na chave managers contem a informação em outros funcionários (se outros funcionários forem gerenciados pelo id informado, este id é referente a de um Gerente)
// Exemplo - Shoranda não é gerente pq seu id não esta na chave managers de nenhum funcionário
// Exemplo 2 - Stephanie é gerente
function isManager(id) {
  return data.employees.some((element) => element.managers.includes(id)); // Se o id informado está dentro do array menagers de algum funcionário
}

// Função verifica se funcionário e gerente pela função acima e retorna um array contendo todos os funcionário gerenciados, caso não seja, retorna um erro
function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) { // Se retornar como false, um erro será informado
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else { // Se a função isManager for true, o código abaixo será executado
    const result = data.employees.filter((element) => (element.managers.includes(managerId))); // Filtrará todos os funcionários que tem o id do Gerente na chave managers (retorna uma array contendo todos os objetos com as informações dos funcionários)
    const resultMap = result.map((element) => `${element.firstName} ${element.lastName}`);
    return resultMap; // Altera as informações no array acima para apresentar apenas o nome completo de cada funcionário gerenciado pelo Gerente informado no id
  }
}

module.exports = { isManager, getRelatedEmployees };
