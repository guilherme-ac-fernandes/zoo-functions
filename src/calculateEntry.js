const data = require('../data/zoo_data');

// Função para contar o número de adultos, crianças e idoso em um array com nome e idade
function countEntrants(entrants) {
  const object = { adult: 0, child: 0, senior: 0 }; // Objeto inicial
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

// Função para calcular o valor total a ser pago
function calculateEntry(entrants) {
  if (entrants === undefined) return 0; // Se o parâmetro de entrada não for informado, retorna zero
  const { adult, child, senior } = countEntrants(entrants); // Recebe informações da funcão countEntrants e desestrutura o objeto
  const { adult: adultPrice, senior: seniorPrice, child: childPrice } = data.prices; // Desestrutura o objeto contendo os valores de cada faixa de idade
  const totalAdult = adult * adultPrice;
  const totalChild = child * childPrice;
  const totalSenior = senior * seniorPrice;
  const total = totalAdult + totalChild + totalSenior; // Após a multiplicação dos fatores (respectivamente), o total a pagar será a soma de todos os fatores
  return total;
}

module.exports = { calculateEntry, countEntrants };
