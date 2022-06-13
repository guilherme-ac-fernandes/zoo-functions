const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animal = data.employees.find((item) => item.id === id).responsibleFor[0];
  const animalResidents = data.species.find((item2) => item2.id === animal).residents;
  const oldestAnimal = animalResidents.reduce((acc, item3) => {
    if (item3.age > acc.age) return item3;
    return acc;
  });
  return Object.values(oldestAnimal);
}

module.exports = getOldestFromFirstSpecies;
