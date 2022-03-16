const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return data.employees.some((element) => element.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    const result = data.employees.filter((element) => (element.managers.includes(managerId)));
    const resultMap = result.map((element) => `${element.firstName} ${element.lastName}`);
    return resultMap;
  }
}

module.exports = { isManager, getRelatedEmployees };
