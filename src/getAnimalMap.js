const data = require('../data/zoo_data');

const { species } = data;

const filterByName = () => species.reduce((acc, specie) => {
  const group = acc;
  group[specie.location] = species.filter((animal) => animal.location === specie.location)
    .map((it) => it.name);
  return group;
}, {});

const filterBySex = () => species.reduce((acc, specie) => {
  const group = acc;
  group[specie.location] = species.filter((animal) => animal.location === specie.location)
    .reduce((a, curr) => {
      const test = a;
      test[curr.name] = curr.residents
        .map((animal) => animal.name);
      return test;
    }, {});
  return group;
}, {});

function getAnimalMap(options) {
  // seu código aqui
  const { includesName: name, sex, sorted } = options;
  const groupAnimals = species.reduce((acc, specie) => {
    const group = acc;
    group[specie.location] = species.filter((animal) => animal.location === specie.location);

    return group;
  }, {});

  return groupAnimals;
}
// console.log(getAnimalMap({ sex: 'male' }));
console.log(filterByName());
console.log(filterBySex());
module.exports = getAnimalMap;
