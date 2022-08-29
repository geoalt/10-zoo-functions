const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal = species) {
  // seu código aqui
  if (!animal.specie) {
    return animal.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }

  const searchSpecie = species
    .find((specie) => specie.name === animal.specie)
    .residents;

  return animal.sex
    ? searchSpecie.filter((specie) => specie.sex === animal.sex).length
    : searchSpecie.length;
}

console.log(countAnimals({ specie: 'penguins' }));
module.exports = countAnimals;
