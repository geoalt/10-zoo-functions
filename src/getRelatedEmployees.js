const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  // seu código aqui
  const searchResult = employees
    .some((employee) => employee.managers.includes(id));

  return searchResult;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  return employees
    .filter((employee) => employee.managers.includes(managerId))
    .map((person) => `${person.firstName} ${person.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };

// steph - '9e7d4524-363c-416a-8759-8aa7e50c0992'
// burl - 'fdb2543b-5662-46a7-badc-93d960fdc0a8'