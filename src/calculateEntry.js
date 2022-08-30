const data = require('../data/zoo_data');

const { prices } = data;

const countEntrants = (entrants) => ({
  // seu código aqui
  child: entrants.filter((entrant) => entrant.age < 18).length,
  adult: entrants.filter((entrant) => entrant.age >= 18
    && entrant.age < 50).length,
  senior: entrants.filter((entrant) => entrant.age >= 50).length,
});

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }

  const payers = countEntrants(entrants);

  // return Object.keys(payers)
  //   .reduce((acc, group) => acc + (payers[group] * prices[group]), 0);

  let sum = 0;
  sum += payers.child * prices.child;
  sum += payers.adult * prices.adult;
  sum += payers.senior * prices.senior;

  return sum;
}

console.log(calculateEntry());

module.exports = { calculateEntry, countEntrants };
