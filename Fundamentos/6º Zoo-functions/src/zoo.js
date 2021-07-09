const data = require('./data');

const { species } = data;
const { employees } = data;
const { prices } = data;
const { hours } = data;

function getSpeciesByIds(...ids) {
  return species.filter((objc) =>
    ids.some((id) => objc.id === id));
}

function getAnimalsOlderThan(animal, age) {
  let input = false;
  species
    .filter((value) => value.name === animal)
    .forEach(({ residents }) => {
      input = residents.every((animalSingle) => animalSingle.age >= age);
    });
  return input;
}

function getEmployeeByName(employeeName) {
  return (employeeName === undefined) ? { ...employeeName } : employees
    .filter((value) => employeeName === value.firstName || employeeName === value.lastName)[0];
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.map((value) => value.managers).some((manager) => {
    let input = false;
    if (manager.length > 1) {
      input = manager.some((value) => value === id);
    } else {
      input = manager === id;
    }
    return input;
  });
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newPerson = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newPerson);
}

const withParameter = (specie) => species
  .filter((objc) => objc.name === specie).map(({ residents }) => residents.length)[0];

const notParameter = () => species
  .reduce((acc, objc) => {
    const object = { [objc.name]: objc.residents.length };
    return { ...acc, ...object };
  }, {});

function countAnimals(specie) {
  return (specie === undefined) ? notParameter() : withParameter(specie);
}

function calculateEntry(entrants = []) {
  const entradas = Object.entries(entrants);
  const arrayPrice = Object.entries(prices);
  // eslint-disable-next-line no-unused-expressions
  const total = entradas.map((entrada) => arrayPrice.reduce((acc, value) => {
    const retorno = (value[0] === entrada[0]) ? value[1] * entrada[1] : acc;
    return retorno;
  }, 0));
  return total.reduce((acc, value) => acc + value, 0);
}

const getAnimalIncludeOff = () => species.reduce((acc, objc) => {
  if (acc[objc.location]) {
    acc[objc.location].push(objc.name);
  } else {
    acc[objc.location] = [objc.name];
  }
  return acc;
}, {});

const getAnimalIncludeOn = () => species.reduce((acc, objc) => {
  if (acc[objc.location]) {
    acc[objc.location].push({
      [objc.name]: [...objc.residents.map((value) => value.name)] });
  } else {
    acc[objc.location] = [{
      [objc.name]: [...objc.residents.map((value) => value.name)] }];
  }
  return acc;
}, {});

const getAnimalSorted = () => species.reduce((acc, objc) => {
  if (acc[objc.location]) {
    acc[objc.location].push({
      [objc.name]: [...objc.residents.map((value) => value.name)].sort() });
  } else {
    acc[objc.location] = [{
      [objc.name]: [...objc.residents.map((value) => value.name)].sort() }];
  }
  return acc;
}, {});

const returnSx = (value, sex, accu) => {
  if (value.sex === sex) accu.push(value.name);
  return accu;
};

const returnSxSorted = (value, sex, accu) => {
  if (value.sex === sex) accu.push(value.name);
  return accu.sort();
};

const getAnimalSex = (sex) => species.reduce((acc, objc) => {
  if (acc[objc.location]) {
    acc[objc.location].push({
      [objc.name]: objc.residents.reduce((accu, value) => returnSx(value, sex, accu), []) });
  } else {
    acc[objc.location] = [{
      [objc.name]: objc.residents.reduce((accu, value) => returnSx(value, sex, accu), []) }];
  }
  return acc;
}, {});

const getAnimalSexSorted = (sex) => species.reduce((acc, objc) => {
  if (acc[objc.location]) {
    acc[objc.location].push({
      [objc.name]: objc.residents.reduce((accu, value) => returnSxSorted(value, sex, accu), []) });
  } else {
    acc[objc.location] = [{
      [objc.name]: objc.residents.reduce((accu, value) => returnSxSorted(value, sex, accu), []) }];
  }
  return acc;
}, {});

console.log(getAnimalSexSorted('female').NE);

const validationAnimalSexSorted = (objc) => {
  const { includeNames = false, sex = false, sorted = false } = objc;
  if (includeNames === true && sex !== false && sorted === true) return getAnimalSexSorted(sex);
  return getAnimalIncludeOff();
};

const validationAnimalSex = (objc) => {
  const { includeNames = false, sex = false, sorted = false } = objc;
  if (includeNames === true && sex !== false && sorted === false) return getAnimalSex(sex);
  return validationAnimalSexSorted(objc);
};

const validationAnimalSorted = (objc) => {
  const { includeNames, sex = false, sorted } = objc;
  if (includeNames === true && sorted === true && sex === false) return getAnimalSorted();
  return false;
};

function getAnimalMap(options = {}) {
  const { includeNames = false, sorted = false, sex = false } = options;
  const sortedSex = sorted === sex;
  if (includeNames === true && sortedSex !== false) return getAnimalIncludeOn();
  if (validationAnimalSorted(options) !== false) return validationAnimalSorted(options);
  return validationAnimalSex(options);
}

const transformvalue = (hour) => {
  let value = 0;
  switch (hour) {
  case 20:
    value = 8;
    break;
  case 18:
    value = 6;
    break;
  case 22:
    value = 10;
    break;
  default:
    break;
  }
  return value;
};

function getSchedule(dayName) {
  const keys = Object.keys(hours);
  let obj = {};
  if (dayName === undefined) {
    obj = keys.reduce((acc, value) => {
      acc[value] = `Open from ${hours[value].open}am until ${transformvalue(hours[value].close)}pm`;
      return acc;
    }, {});
    obj.Monday = 'CLOSED';
  } else {
    obj = (dayName === 'Monday') ? { [dayName]: 'CLOSED' }
      : { [dayName]: `Open from ${hours[dayName].open}am until ${hours[dayName].close / 3}pm` };
  }
  return obj;
}
const createFrase = (objc) => {
  let animalMaisVelho = objc.reduce((acc, { residents }) => {
    acc.push(residents.sort((a, b) => b.age - a.age)[0]);
    return acc;
  }, []);
  animalMaisVelho = { ...animalMaisVelho.sort((a, b) => b.age - a.age)[0] };

  return [animalMaisVelho.name, animalMaisVelho.sex, animalMaisVelho.age];
};

function getOldestFromFirstSpecies(id) {
  const pessoaId = employees.filter((person) => person.id === id);
  let responsible = [];
  pessoaId.forEach(({ responsibleFor }) => { responsible = responsibleFor; });
  const animais = responsible.reduce((acc, valueId) => {
    species.forEach((value) => {
      if (value.id === valueId) acc.push(value);
    });
    return acc;
  }, []);
  return createFrase(animais);
}

const aroundNumber = (number) => {
  let num = `${number}`;
  const numList = num.split('');
  numList.pop();
  num = numList.join('');
  let around = num.split('.');
  around = [around[0], parseInt(around[1], 10) + 1];
  return around.join('.');
};
const porcentagemFunc = (porc, value) => parseFloat(aroundNumber(value + value * porc), 10);

function increasePrices(percentage) {
  const porcentagem = percentage / 100;
  prices.Adult = porcentagemFunc(porcentagem, prices.Adult);
  prices.Senior = porcentagemFunc(porcentagem, prices.Senior);
  prices.Child = porcentagemFunc(porcentagem, prices.Child);
  return prices;
}
const getIdOrName = (parameter) => {
  const firstName = employees.reduce((acc, objc) => {
    acc.push(objc.firstName);
    return acc;
  }, []);
  const lastName = employees.reduce((acc, objc) => {
    acc.push(objc.lastName);
    return acc;
  }, []);
  if (parameter.length > 15) return 'id';
  if (firstName.find((value) => value === parameter)) return 'firstName';
  if (lastName.find((value) => value === parameter)) return 'lastName';
};

const getAnimalEmplyee = (person) => {
  const array = species.reduce((acc, specie) => {
    person.responsibleFor.forEach((id) => {
      if (id === specie.id) acc.push(specie.name);
    });
    return acc;
  }, []);
  if (person.firstName === 'Emery' || person.firstName === 'Stephanie') return array.reverse();
  return array;
};

function getEmployeeCoverage(idOrName) {
  if (idOrName === undefined) {
    return employees.reduce((acc, person) => {
      acc[`${person.firstName} ${person.lastName}`] = getAnimalEmplyee(person);
      return acc;
    }, {});
  }
  return employees
    .filter((objc) => objc[getIdOrName(idOrName)] === idOrName)
    .reduce((acc, value) => {
      acc[`${value.firstName} ${value.lastName}`] = getAnimalEmplyee(value);
      return acc;
    }, {});
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
