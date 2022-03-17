const data = require('../data/zoo_data');

// Função que retorna os animais de cada funcionário e suas localização no zoológico
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

// Função que cria os dados de todos os funcionário do zoológico
const employeeList = () => data.employees.map((employee) => {
  const arrays = arrayAnimalELocation(employee);
  const nameString = `${employee.firstName} ${employee.lastName}`;
  return {
    id: employee.id,
    fullname: nameString,
    species: arrays.animalArray,
    locations: arrays.locationArray,
  };
});

// Função que cria os dados de um funcionário a partir do nome ou sobrenome
const employeeInfoName = (name) => {
  const employee = data.employees.find((item) => item.firstName === name || item.lastName === name);
  const arrays = arrayAnimalELocation(employee);
  return {
    id: employee.id,
    fullname: `${employee.firstName} ${employee.lastName}`,
    species: arrays.animalArray,
    locations: arrays.locationArray,
  };
};

// Função que cria os dados de um funcionário a partir do id
const employeeInfoId = (id) => {
  const employee = data.employees.find((item) => item.id === id);
  const arrays = arrayAnimalELocation(employee);
  return {
    id: employee.id,
    fullname: `${employee.firstName} ${employee.lastName}`,
    species: arrays.animalArray,
    locations: arrays.locationArray,
  };
};

function getEmployeesCoverage(options) {
  if (options === undefined) return employeeList(); // Sem parâmetro, informa lista de todos os funcionário
  const { name } = options;
  const { id } = options;
  if (name !== undefined) return employeeInfoName(name); // Pelo nome, retorna os dados de um funcionário
  const idsEmployees = data.employees.map((item) => item.id); // Array contendo todos os ids dos funcionários
  const idCheck = idsEmployees.some((idItem) => idItem === id); // Avalia ser o id informado pertence a um funcionário
  if (idCheck === true) return employeeInfoId(id); // Se idCheck é true - mostra informações do funcionário
  throw new Error('Informações inválidas'); // Se não, mostra mensagem de erro
}

console.log(getEmployeesCoverage({ name: 'Sharonda' }));

module.exports = getEmployeesCoverage;
