const data = require('../data/zoo_data');

const { species } = data;

const printSimpleMap = () =>
  species.reduce((acc, specie) => {
    const group = acc;
    group[specie.location] = species.filter((it) => it.location === specie.location)
      .map((it) => it.name);

    return group;
  }, {});

const printSorted = (sex) => species.reduce((acc, specie) => {
  const group = acc;
  group[specie.location] = species.filter((it) => it.location === specie.location)
    .map((it) => species.reduce((a, _c) => {
      const groupedByAnimal = a;
      // console.log(c)
      groupedByAnimal[it.name] = it.residents
        .filter((animal) => animal.sex === sex)
        .map((resident) => resident.name)
        .sort();

      return groupedByAnimal;
    }, {}));

  return group;
}, {});

const printFilteredBySex = (sex) => species.reduce((acc, specie) => {
  const group = acc;
  group[specie.location] = species.filter((it) => it.location === specie.location)
    .map((it) => species.reduce((a, _c) => {
      const groupedByAnimal = a;
      // console.log(c)
      groupedByAnimal[it.name] = it.residents
        .filter((animal) => animal.sex === sex)
        .map((resident) => resident.name);

      return groupedByAnimal;
    }, {}));

  return group;
}, {});

const printFullMap = ({ includeNames: name, sex, sorted }) => {
  // console.log(sex, sorted)
  if (sex && sorted) return printSorted(sex);
  if (sex) return printFilteredBySex(sex);
  return species.reduce((acc, specie) => {
    const group = acc;
    group[specie.location] = species.filter((it) => it.location === specie.location)
      .map((it) => species.reduce((a, _c) => {
        const groupedByAnimal = a;
        // console.log(c)
        groupedByAnimal[it.name] = it.residents
          .map((resident) => resident.name);

        return groupedByAnimal;
      }, {}));

    return group;
  }, {});
};

const printFullSort = ({ includeNames: name, sex }) => {
  if (!name) return printSimpleMap();
  if (sex) return printSorted(sex);
  return species.reduce((acc, specie) => {
    const group = acc;
    group[specie.location] = species.filter((it) => it.location === specie.location)
      .map((it) => species.reduce((z, _c) => {
        const groupedByAnimal = z;
        // console.log(c)
        groupedByAnimal[it.name] = it.residents
          .map((resident) => resident.name)
          .sort();

        return groupedByAnimal;
      }, {}));

    return group;
  }, {});
};

function getAnimalMap(options) {
  // seu código aqui

  if (options && options.sorted) return printFullSort(options);
  if (options && options.includeNames) return printFullMap(options);

  return printSimpleMap();
}
console.log(getAnimalMap({ includeNames: true, sorted: true }));
// console.log(getAnimalMap({ includeNames: true, sex: 'female' }));
module.exports = getAnimalMap;
