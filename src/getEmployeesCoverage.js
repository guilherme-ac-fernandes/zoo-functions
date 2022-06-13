const data = require('../data/zoo_data');

const arrayAnimalELocation = (employeeInfo) => {
  const animalArray = [];
  const locationArray = []; 
  employeeInfo.responsibleFor.forEach((item) => {
    const animal = data.species.find((item2) => item2.id === item);
    animalArray.push(animal.name);
    locationArray.push(animal.location);
  });
  return { animalArray, locationArray };
};

const employeeList = () => data.employees.map((employee) => {
  const arrays = arrayAnimalELocation(employee);
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: arrays.animalArray,
    locations: arrays.locationArray,
  };
});

const employeeInfoName = (name) => {
  const employee = data.employees.find((item) => item.firstName === name || item.lastName === name);
  const arrays = arrayAnimalELocation(employee);
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: arrays.animalArray,
    locations: arrays.locationArray,
  };
};

const employeeInfoId = (id) => {
  const employee = data.employees.find((item) => item.id === id);
  const arrays = arrayAnimalELocation(employee);
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: arrays.animalArray,
    locations: arrays.locationArray,
  };
};

function getEmployeesCoverage(options) {
  if (options === undefined) return employeeList();
  const { name, id } = options;
  if (name !== undefined) return employeeInfoName(name);
  const idsEmployees = data.employees.map((item) => item.id);
  const idCheck = idsEmployees.some((idItem) => idItem === id);
  if (idCheck === true) return employeeInfoId(id);
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
