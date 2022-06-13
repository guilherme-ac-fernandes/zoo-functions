const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const result = [];
  ids.forEach((idElement) => {
    const spicieFind = data.species.find((specie) => specie.id === idElement);
    result.push(spicieFind);
  });
  return result;
}

module.exports = getSpeciesByIds;
