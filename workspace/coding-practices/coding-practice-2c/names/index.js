let names = require("../country/state/city/index");
let getFirstNames = require("../utilities/utils/index");

const getPeopleInCity = (names) => {
  return getFirstNames(names);
};

module.exports = getPeopleInCity;
