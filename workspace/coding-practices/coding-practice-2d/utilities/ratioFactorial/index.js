const factorialOfNumber = require("../factorial/index");
const ratioOfTwoNumbers = require("../ratio/index");

const ratioAndFactorial = (a, b, c) => {
  const ratio = ratioOfTwoNumbers(a, b);
  const factorial = factorialOfNumber(c);
  return { ratio: ratio, factorial: factorial };
};

module.exports = ratioAndFactorial;
