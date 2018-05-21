'use strict';

var gcd = require('@fav/math.gcd');

function lcm(x, y) {
  var z = gcd(x, y);
  return Math.abs(x * y / z);
}

module.exports = lcm;
