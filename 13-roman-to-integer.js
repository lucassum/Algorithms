const romanMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  return s
    .split("")
    .reduce(
      (sum, val, i, arr) =>
        romanMap[val] < romanMap[arr[i + 1]]
          ? sum - romanMap[val]
          : sum + romanMap[val],
      0
    );
};
