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




const getRegionWithName = (sort) => data.species.reduce((acc, element) => {
  if (!acc[element.location]) {
    acc[element.location] = [];
  }
  const allNames = element.residents.map((item) => item.name);
  if (sort === true) {
    allNames.sort();
  }
  // Utilização do objecto entres [] para não causar erro ao atribuir como key do objeto observado a utilização como exemplo no StackOverflow
  // source: https://stackoverflow.com/questions/2274242/how-to-use-a-variable-for-a-key-in-a-javascript-object-literal
  const animalObject = { [element.name]: allNames };
  acc[element.location].push(animalObject);
  return acc;
}, {});

// const getRegionWithNameSorted = () => data.species.reduce((acc, element) => {
//   if (!acc[element.location]) {
//     acc[element.location] = [];
//   }
//   const allNames = element.residents.map((item) => item.name).sort();
//   const animalObject = { [element.name]: allNames };
//   acc[element.location].push(animalObject);
//   return acc;
// }, {});

const getRegionWithNameAndSex = (sexAnimal) => data.species.reduce((acc, element) => {
  if (!acc[element.location]) {
    acc[element.location] = [];
  }
  const allSexFilter = element.residents.filter((item) => item.sex === sexAnimal);
  const allSexNames = allSexFilter.map((item2) => item2.name);
  const animalObject = { [element.name]: allSexNames };
  acc[element.location].push(animalObject);
  return acc;
}, {});

const getRegionWithNameAndSexSorted = (sexAnimal) => data.species.reduce((acc, element) => {
  if (!acc[element.location]) {
    acc[element.location] = [];
  }
  const allSexFilter = element.residents.filter((item) => item.sex === sexAnimal);
  const allSexNames = allSexFilter.map((item2) => item2.name).sort();
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
  if (includeNames === true && sex !== undefined && sorted === true) return getRegionWithNameAndSexSorted(sex);
  if (includeNames === true && sex !== undefined) return getRegionWithNameAndSex(sex);
  if (includeNames && sorted) return getRegionWithName(sorted);
  if (!includeNames) return getRegions();
  if (includeNames) return getRegionWithName(sorted);
}



console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }));

// console.log(getRegionWithNameAndSex('female'));

module.exports = getAnimalMap;
