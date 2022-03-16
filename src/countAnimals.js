const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return data.species.reduce((acc, specie) => {
      acc[`${specie.name}`] = specie.residents.length;
      return acc;
    }, {});
  }
  const animalFind = data.species.find((element) => element.name === animal.specie);
  // .hasOwnProperty() estava dando erro, encontrei outra forma de resolver utilizando "'key' in object" no StackOverflow
  // source: https://stackoverflow.com/questions/1098040/checking-if-a-key-exists-in-a-javascript-object
  if ('sex' in animal) {
    return animalFind.residents.filter((item) => item.sex === animal.sex).length;
  }
  return animalFind.residents.length;
}

console.log(countAnimals({ specie: 'elephants', sex: 'male' }));

module.exports = countAnimals;
