const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const object = { adult: 0, child: 0, senior: 0 };
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
