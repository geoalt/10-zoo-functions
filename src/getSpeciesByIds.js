const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  // seu código aqui
  return ids.map((id) => species
    .filter((specie) => specie.id === id))
    .flat();
}
console.log(getSpeciesByIds('533bebf3-6bbe-41d8-9cdf-46f7d13b62ae'))
module.exports = getSpeciesByIds;
