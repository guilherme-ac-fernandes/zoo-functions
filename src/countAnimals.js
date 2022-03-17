const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) { // Caso o parâmetro da função não for definido, retorna um objeto contendo todos as espécies como chaves e a quantidade como valores
    return data.species.reduce((acc, specie) => {
      acc[`${specie.name}`] = specie.residents.length;
      return acc;
    }, {}); // A HOF reduce (tendo como acumulador um objeto vazio) a cada espécie não existente no objeto, criar uma nova chave e retorna como valor o tamanho do array residents (total de residentes).
  }
  const { specie, sex } = animal; // Desestruturação do Objeto passado como parâmetro
  const animalFind = data.species.find((element) => element.name === animal.specie); // Informado o parâmetro specie, retorn o objeto da espécie analisada
  if (sex !== undefined) { // Caso a função sex for informada, retorna quantidade de animais da espécie e sexo informado
    return animalFind.residents.filter((item) => item.sex === animal.sex).length;
  }
  if (specie !== undefined) { // Caso apenas a espécie seja informada, retorna o número total de residentes da espécie.
    return animalFind.residents.length; // Tamanho do array residents (total de residentes)
  }
}

module.exports = countAnimals;
