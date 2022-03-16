const data = require('../data/zoo_data');

function getEmployeeByName(name) {
  if (name === undefined) return {};
  return data.employees.find((item) => (item.firstName === name || item.lastName === name));
}

module.exports = getEmployeeByName;
