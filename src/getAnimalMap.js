const data = require('../data/zoo_data');

// Função que criar o mapeamento geográfico apenas para as localização
const getRegions = () => data.species.reduce((acc, element) => {
  if (!acc[element.location]) {
    acc[element.location] = [];
  }
  const animalName = element.name;
  acc[element.location].push(animalName);
  return acc;
}, {});

// Função que criar o mapeamento com filter e sort
const getRegionWithNameAndSex = (sexAnimal, sorted) => data.species.reduce((acc, element) => {
  if (!acc[element.location]) {
    acc[element.location] = [];
  }
  let position = element.residents;
  if (sexAnimal !== undefined) {
    position = position.filter((item) => item.sex === sexAnimal);
  }
  const allSexNames = position.map((item2) => item2.name);
  if (sorted === true) {
    allSexNames.sort();
  }
  // Utilização do objecto entres [] para não causar erro ao atribuir como key do objeto observado a utilização como exemplo no StackOverflow
  // source: https://stackoverflow.com/questions/2274242/how-to-use-a-variable-for-a-key-in-a-javascript-object-literal
  const animalObject = { [element.name]: allSexNames };
  acc[element.location].push(animalObject);
  return acc;
}, {});

function getAnimalMap(options) {
  if (options === undefined) return getRegions();
  const { includeNames } = options;
  const { sex } = options;
  const { sorted } = options;
  console.log(includeNames, sex, sorted);
  if (!includeNames) return getRegions();
  return getRegionWithNameAndSex(sex, sorted);
}

module.exports = getAnimalMap;
