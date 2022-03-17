const data = require('../data/zoo_data');

// Função que verifica se todos os animais de uma espécie tem idade maior que a miníma
function getAnimalsOlderThan(animal, age) {
  const animalFind = data.species.find((element) => element.name === animal); // Busca as informações da espécie me questão para ser analisada (espécia informada como paramêtro)
  return animalFind.residents.every((element2) => element2.age > age); // Verifica se todos os animais desta espécie te idade superior a idade minima informada como paramêtro
}

module.exports = getAnimalsOlderThan;
