/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function (n) {
  const array = [];
  for (let i = 1; i <= n; i++) array.push(getFizzBuzzValue(i));
  return array;
};

const getFizzBuzzValue = (number) => {
  let result = "";
  if (!(number % 3)) result += "Fizz";
  if (!(number % 5)) result += "Buzz";
  return result || number + "";
};
