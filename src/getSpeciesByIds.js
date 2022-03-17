const data = require('../data/zoo_data');

// Função que retorna as informações das espécies dos animais a partir do id informado
function getSpeciesByIds(...ids) {
  const result = []; // armazena as informações dos animais, caso for mais de um id
  ids.forEach((idElement) => {
    const spicieFind = data.species.find((specie) => specie.id === idElement); // HOF para encontrar cada espécie referente aos ids informados
    result.push(spicieFind); // Coloca a espécie encontrada e coloca no array de resultados
  });
  return result; // Retorna o array contendo todas as informações
}

module.exports = getSpeciesByIds;
