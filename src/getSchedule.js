const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;

const weekDays = (Object.keys(hours));
// console.log(weekDays[0]);

const isAnimal = (arg) =>
  species.some((specie) => specie.name === arg)
  && species.find((specie) => specie.name === arg).availability;

const isWeekDay = (arg) =>
  Object.keys(hours).some((day) => day === arg)
  && species.filter((specie) => specie.availability
    .includes(arg))
    .map((animal) => animal.name);

const printDaySchedule = (dayOfTheWeek, animals) => {
  const print = {};
  if (dayOfTheWeek === 'Monday') {
    print[dayOfTheWeek] = {
      exhibition: 'The zoo will be closed!',
      officeHour: 'CLOSED',
    };
  } else {
    print[dayOfTheWeek] = {
      exhibition: animals,
      officeHour: `Open from ${hours[dayOfTheWeek].open}am until ${hours[dayOfTheWeek].close}pm`,
    };
  }
  return print;
};

const printFullWeekSchedule = () =>
  weekDays.reduce((acc, it) => {
    const group = acc;
    if (!group[it] && it !== 'Monday') {
      group[it] = {
        exhibition: species.filter((specie) => specie.availability
          .includes(it))
          .map((animal) => animal.name),
        officeHour: `Open from ${hours[it].open}am until ${hours[it].close}pm`,
      };
    } else {
      group[it] = {
        exhibition: 'The zoo will be closed!',
        officeHour: 'CLOSED',
      };
    }
    return group;
  }, {});

function getSchedule(scheduleTarget) {
  const searchByAnimalsName = isAnimal(scheduleTarget);
  const searchByWeekDay = isWeekDay(scheduleTarget);

  if (searchByAnimalsName || searchByWeekDay) {
    return searchByAnimalsName || printDaySchedule(scheduleTarget, searchByWeekDay);
  }

  return printFullWeekSchedule();
}

module.exports = getSchedule;
