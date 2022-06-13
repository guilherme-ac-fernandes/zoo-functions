const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalFind = data.species.find((element) => element.name === animal);
  return animalFind.residents.every((element2) => element2.age > age);
}

module.exports = getAnimalsOlderThan;
