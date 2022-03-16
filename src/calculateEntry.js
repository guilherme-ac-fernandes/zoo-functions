const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const object = { adult: 0, child: 0, senior: 0 };
  // O object.values é utilizado para avaliação se a informação de entrada informada é um objeto e transforma em um objeto, caso seja um array, não ocorre nenhuma alteração com a informação passada - Resolução realizada com a instrutora Fernanda durante a monitoria
  // Observação: object.entries altera o array passado com as informações corretas
  return Object.values(entrants).reduce((acc, person) => {
    if (person.age < 18) {
      acc.child += 1;
      return acc;
    } if (person.age >= 18 && person.age < 50) {
      acc.adult += 1;
      return acc;
    }
    acc.senior += 1;
    return acc;
  }, object);
}

function calculateEntry(entrants) {
  if (entrants === undefined) return 0;
  const { adult, child, senior } = countEntrants(entrants);
  const { adult: adultPrice, senior: seniorPrice, child: childPrice } = data.prices;
  const totalAdult = adult * adultPrice;
  const totalChild = child * childPrice;
  const totalSenior = senior * seniorPrice;
  const total = totalAdult + totalChild + totalSenior;
  return total;
}

module.exports = { calculateEntry, countEntrants };
