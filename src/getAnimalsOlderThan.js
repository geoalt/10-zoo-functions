const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species
    .find((specie) => specie.name === animal)
    .residents
    .every((resident) => resident.age >= age);
}

// console.log(getAnimalsOlderThan('lions', 10));
module.exports = getAnimalsOlderThan;
