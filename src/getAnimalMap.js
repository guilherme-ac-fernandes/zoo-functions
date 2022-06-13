const data = require('../data/zoo_data');

const getRegions = () => data.species.reduce((acc, element) => {
  if (!acc[element.location]) {
    acc[element.location] = [];
  }
  acc[element.location].push(element.name);
  return acc;
}, {});

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
  // Utilização do objeto entries para não causar erro ao atribuir como key do objeto observado a utilização como exemplo no StackOverflow
  // source: https://stackoverflow.com/questions/2274242/how-to-use-a-variable-for-a-key-in-a-javascript-object-literal
  const animalObject = { [element.name]: allSexNames };
  acc[element.location].push(animalObject);
  return acc;
}, {});

function getAnimalMap(options) {
  if (options === undefined) return getRegions();
  const { includeNames, sex, sorted } = options;
  if (!includeNames) return getRegions();
  if (includeNames) return getRegionWithNameAndSex(sex, sorted);
}

module.exports = getAnimalMap;
