const data = require('../data/zoo_data');

// Função que retorna os animais de cada funcionário e suas localização no zoológico
const arrayAnimalELocation = (employeeInfo) => {
  const animalArray = []; // Array que terá todas as informações das espécies de cada funcionário
  const locationArray = []; // Array que terá todas as localizações que o funcionário atua (referente a posição das espécies)
  employeeInfo.responsibleFor.forEach((item) => { // Faz interação dos ids dos animais para comparação
    const animal = data.species.find((item2) => item2.id === item); // Encontra qual animal é referente a cada id presente na variável item do loop com forEach
    animalArray.push(animal.name); // Inclui o nome da espécie no array com Nomes
    locationArray.push(animal.location); // Inclui a localização da espécie no array com Localizações
  });
  return { animalArray, locationArray }; // Retorna um objeto contendo as duas informações que podem ser acessadas com 'dot notation'
};

// Função que cria os dados de todos os funcionário do zoológico
const employeeList = () => data.employees.map((employee) => {
  const arrays = arrayAnimalELocation(employee); // Retorna a função que busca dos dados de espécies e localizações pelas informações do funcionário
  return { // Retorna um objeto contendo as informações no padrão chave e valor para todos os funcionários
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: arrays.animalArray,
    locations: arrays.locationArray,
  };
});

// Função que cria os dados de um funcionário a partir do nome ou sobrenome
const employeeInfoName = (name) => {
  const employee = data.employees.find((item) => item.firstName === name || item.lastName === name); // Encontra o funcionário com o nome ou sobrenome informado
  const arrays = arrayAnimalELocation(employee); // Retorna a função que busca dos dados de espécies e localizações pelas informações do funcionário
  return { // Retorna um objeto contendo todas as informações deste funcionário
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: arrays.animalArray,
    locations: arrays.locationArray,
  };
};

// Função que cria os dados de um funcionário a partir do id
const employeeInfoId = (id) => {
  const employee = data.employees.find((item) => item.id === id); // Encontra o funcionário pelo id informado
  const arrays = arrayAnimalELocation(employee); // Retorna a função que busca dos dados de espécies e localizações pelas informações do funcionário
  return { // Retorna um objeto contendo todas as informações deste funcionário
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: arrays.animalArray,
    locations: arrays.locationArray,
  };
};

// Função que engloda todas as possibilidades em relação a informação passada como parâmetro
function getEmployeesCoverage(options) {
  if (options === undefined) return employeeList(); // Sem parâmetro, informa lista de todos os funcionário
  const { name, id } = options; // Desestruturação do objeto
  if (name !== undefined) return employeeInfoName(name); // Pelo nome, retorna os dados de um funcionário
  const idsEmployees = data.employees.map((item) => item.id); // Array contendo todos os ids dos funcionários
  const idCheck = idsEmployees.some((idItem) => idItem === id); // Avalia ser o id informado pertence a um funcionário
  if (idCheck === true) return employeeInfoId(id); // Se idCheck é true - mostra informações do funcionário
  throw new Error('Informações inválidas'); // Se não, mostra mensagem de erro
}

module.exports = getEmployeesCoverage;
