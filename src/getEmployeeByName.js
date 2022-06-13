const data = require('../data/zoo_data');

function getEmployeeByName(name) {
  if (name === undefined) return {};
  const employeeFirtsNames = data.employees.map((item) => item.firstName);
  const employeeLastNames = data.employees.map((item) => item.lastName);
  const employeeNames = [...employeeFirtsNames, ...employeeLastNames];
  const checkName = employeeNames.some((item) => item === name);
  if (checkName === true) { 
    return data.employees.find((item) => (item.firstName === name || item.lastName === name));
  }
  throw new Error('Nome inválido');
}

module.exports = getEmployeeByName;
