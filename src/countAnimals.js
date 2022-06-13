const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return data.species.reduce((acc, specie) => {
      acc[`${specie.name}`] = specie.residents.length;
      return acc;
    }, {}); 
  }
  const { specie, sex } = animal;
  const animalFind = data.species.find((element) => element.name === animal.specie);
  if (sex !== undefined) {
    return animalFind.residents.filter((item) => item.sex === animal.sex).length;
  }
  if (specie !== undefined) {
    return animalFind.residents.length;
  }
}

module.exports = countAnimals;
