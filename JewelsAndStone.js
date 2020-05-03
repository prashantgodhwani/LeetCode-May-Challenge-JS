/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  var arr = {},
    count = 0;

  S.split('').forEach((el) => {
    if (arr[el]) arr[el] += 1;
    else arr[el] = 1;
  });

  var j = new Set(J);

  j.forEach(el => {
    if (arr[el]) count += arr[el];
  });

  return count;
};