const data = require('../data/zoo_data');

// Função que retorna o animal com maior idade, referente ao primeiro elemento do array responsibleFor
function getOldestFromFirstSpecies(id) {
  const animal = data.employees.find((item) => item.id === id).responsibleFor[0]; // Retorna o id do primeiro animal do array responsibleFor do funcionário em questão
  const animalResidents = data.species.find((item2) => item2.id === animal).residents; // Retorna o array contendo todos os animais da espécie em questão
  const oldestAnimal = animalResidents.reduce((acc, item3) => { // Encontra o indivíduo mias velho presente nesta espécie
    if (item3.age > acc.age) return item3;
    return acc;
  });
  return Object.values(oldestAnimal); // Retorna apenas os valores (Transforma um objeto em um array contendo apenas os valores)
}

module.exports = getOldestFromFirstSpecies;
