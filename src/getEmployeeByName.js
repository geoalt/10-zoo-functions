const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  // seu código aqui
  const searchResult = employees.find((employee) =>
    employee.firstName === employeeName
    || employee.lastName === employeeName);

  return searchResult || {};
}

// console.log(getEmployeeByName('Nelson'));
module.exports = getEmployeeByName;
