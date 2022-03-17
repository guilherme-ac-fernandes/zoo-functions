const data = require('../data/zoo_data');

// Fuinção que retorna os dados de um funcionário do zoológico
function getEmployeeByName(name) {
  if (name === undefined) return {}; // Caso não seja passado parâmetro, retornar um objeto vazio
  const employeeFirtsNames = data.employees.map((item) => item.firstName); // Pega as informações do Primeiro Nome para Avaliação
  const employeeLastNames = data.employees.map((item) => item.lastName); // Pega as informações do Último Nome para Avaliação
  const employeeNames = [...employeeFirtsNames, ...employeeLastNames]; // Combina os array de primeiro e último nome em um para avaliação
  const checkName = employeeNames.some((item) => item === name); // Avalia se o nome ou sobrenome informado é de um funcionário
  if (checkName === true) { // Se for true, retorna a informação do funcionário
    return data.employees.find((item) => (item.firstName === name || item.lastName === name));
  }
  throw new Error('Nome inválido'); // Caso contrário (avaliação retornar false), informa erro no parâmetro informado.
}

module.exports = getEmployeeByName;
