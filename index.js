/* eslint-disable linebreak-style */
/* eslint-disable prefer-template */
/* eslint-disable linebreak-style */
/* eslint-disable func-names */
module.exports = function (n) {
  if (typeof n !== 'number') {
    return null;
  }
  if (n % 3 === 0 && n % 5 === 0) {
    return 'fizzbuzzz';
  }
  if (n % 3 === 0) {
    return 'fizz';
  }
  if (n % 5 === 0) {
    return 'buzz';
  }
  return '' + n;
};
