const ratioOfTwo = require("../ratio/index.js");
const factorialOfNum = require("../factorial/index.js");
const ratioAndFactorial = (a, b, c) => {
  const ratio = ratioOfTwo(a, b);
  const factorial = factorialOfNum(c);
  return { ratio, factorial };
};

module.exports = ratioAndFactorial;
