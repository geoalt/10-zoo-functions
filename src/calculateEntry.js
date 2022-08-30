const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return {};
  }

  console.log(entrants);

  const child = entrants.filter((entrant) => entrant.age < 18).length;
  const adult = entrants.filter((entrant) => entrant.age >= 18
    && entrant.age < 50).length;
  const senior = entrants.filter((entrant) => entrant.age >= 50).length;

  return { child, adult, senior };
}

function calculateEntry(entrants) {
  // seu código aqui
  let sum = 0;
  const payers = countEntrants(entrants);

  if (Object.keys(payers).length === 0) {
    return sum;
  }
  sum += payers.child * prices.child;
  sum += payers.adult * prices.adult;
  sum += payers.senior * prices.senior;

  return sum;
}

module.exports = { calculateEntry, countEntrants };
