/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
const kWeakestRows = function (mat, k) {
  const tempArray = [...mat];
  tempArray.sort(
    (a, b) =>
      a.filter((isSoldier) => isSoldier).length -
      b.filter((isSoldier) => isSoldier).length
  );
  return new Array(k).fill(0).map((_, i) => mat.indexOf(tempArray[i]));
};
