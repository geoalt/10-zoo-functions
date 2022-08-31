const data = require('../data/zoo_data');

const { species } = data;
const { employees } = data;

const getFirstAnimal = (employeeId) => {
  const search = employees.find((employee) => employee.id === employeeId);
  return search && search.responsibleFor[0];
};

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const specieId = getFirstAnimal(id);
  const oldestAnimal = species.find((specie) => specie.id === specieId);

  return oldestAnimal
    && Object.values(oldestAnimal.residents
      .reduce((acc, curr) => (acc.age > curr.age ? acc : curr)));
}

// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
