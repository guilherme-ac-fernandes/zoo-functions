const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return data.species.reduce((acc, specie) => {
      acc[`${specie.name}`] = specie.residents.length;
      return acc;
    }, {});
  }
  if (animal.hasOwnProperty('sex')) {
    return data.species.find((element) => element.name === animal.specie).residents.filter((item) => item.sex === animal.sex).length;
  }
  return data.species.find((element) => element.name === animal.specie).residents.length;
}

console.log(countAnimals({ specie: 'elephants', sex: 'male' }));

module.exports = countAnimals;
