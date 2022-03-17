const data = require('../data/zoo_data');

const schedule = () => Object.entries(data.hours).reduce((acc, item) => {
  let string;
  let exhibition;
  if (item[1].open === 0) {
    string = 'CLOSED';
    exhibition = 'The zoo will be closed!';
  } else {
    string = `Open from ${item[1].open}am until ${item[1].close}pm`;
    const inicial = data.species.filter((local) => local.availability.includes(item[0]));
    exhibition = inicial.map((element) => element.name);
  }
  if (!acc[item[0]]) acc[item[0]] = { officeHour: string, exhibition };
  return acc;
}, {});

const scheduleDay = (day) => Object.entries(data.hours).reduce((acc, item) => {
  if (item[0] === day) {
    const dayPosition = Object.keys(data.hours).indexOf(day);
    const dayInfo = Object.values(schedule())[dayPosition];
    return { [day]: dayInfo };
  }
  return acc;
}, {});

const dayExhibition = (animal) => data.species.find((item) => item.name === animal).availability;

function getSchedule(scheduleTarget) {
  const animals = data.species.map((element) => element.name);
  const dayOfWeek = Object.keys(data.hours);
  const animalInfo = animals.some((element) => element === scheduleTarget);
  const weekInfo = dayOfWeek.some((element) => element === scheduleTarget);
  const allSchedule = schedule();
  if (scheduleTarget === undefined) return allSchedule;
  if (animalInfo === false && weekInfo === false) return allSchedule;
  if (weekInfo === true) return scheduleDay(scheduleTarget);
  return dayExhibition(scheduleTarget);
}

module.exports = getSchedule;
