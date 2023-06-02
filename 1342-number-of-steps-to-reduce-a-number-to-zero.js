/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let n = num;
  let count = 0;
  while (n) {
    n = n % 2 ? n - 1 : n / 2;
    count++;
  }
  return count;
};
