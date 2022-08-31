const data = require('../data/zoo_data');

const { species } = data;
const { employees } = data;

const getEmployee = (obj) => {
  const { name, id } = obj;

  const searchByName = employees.find((employee) => employee.firstName === name
    || employee.lastName === name);
  const searchById = employees.find((employee) => employee.id === id);

  console.log(searchById, searchByName);

  if (!searchById && !searchByName) {
    throw new Error('Informações inválidas');
  }

  return searchByName || searchById;
};

const getSpecies = (animalsList) => animalsList.map((animal) => species
  .filter((specie) => specie.id === animal))
  .flat();

const printAllEmployees = () => employees.map((employee) => ({
  id: employee.id,
  fullName: `${employee.firstName} ${employee.lastName}`,
  species: getSpecies(employee.responsibleFor)
    .map((specie) => specie.name),
  locations: getSpecies(employee.responsibleFor)
    .map((specie) => specie.location),
}));

function getEmployeesCoverage(obj) {
  const print = {};

  if (!obj) {
    return printAllEmployees();
  }

  const employeeInfo = getEmployee(obj);
  const speciesInfo = getSpecies(employeeInfo.responsibleFor);

  print.id = employeeInfo.id;
  print.fullName = `${employeeInfo.firstName} ${employeeInfo.lastName}`;
  print.species = speciesInfo.map((specie) => specie.name);
  print.locations = speciesInfo.map((specie) => specie.location);

  return print;
}

module.exports = getEmployeesCoverage;
