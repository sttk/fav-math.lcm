'use strict';

var chai = require('chai');
var expect = chai.expect;

var fav = {}; fav.math = {}; fav.math.lcm = require('..');

var lcm = fav.math.lcm;

var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || (Math.pow(2, 53) - 1);
var MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER || -(Math.pow(2, 53) - 1);

describe('fav.math.lcm', function() {

  it ('Should calculate least common multiple when x == y', function() {
    expect(lcm(1, 1)).to.equal(1);
    expect(lcm(-1, -1)).to.equal(1);
    expect(lcm(1, -1)).to.equal(1);
    expect(lcm(-1, 1)).to.equal(1);

    expect(lcm(123, 123)).to.equal(123);
    expect(lcm(-123, -123)).to.equal(123);
    expect(lcm(-123, 123)).to.equal(123);
    expect(lcm(123, -123)).to.equal(123);

    expect(lcm(MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)).to.equal(
      MAX_SAFE_INTEGER);
    expect(lcm(MIN_SAFE_INTEGER, MIN_SAFE_INTEGER)).to.equal(
      -MIN_SAFE_INTEGER);
  });

  it ('Should calculate least common multiple when x > y', function() {
    expect(lcm(60, 36)).to.equal(180);
    expect(lcm(45, 30)).to.equal(90);
    expect(lcm(42, 28)).to.equal(84);
  });

  it ('Should calculate least common multiple when x < y', function() {
    expect(lcm(36, 60)).to.equal(180);
    expect(lcm(30, 45)).to.equal(90);
    expect(lcm(28, 42)).to.equal(84);
  });

  it('Should return y when x == 1 or -1', function() {
    expect(lcm(1, 60)).to.equal(60);
    expect(lcm(-1, 60)).to.equal(60);
  });

  it('Should return x when y == 1 or -1', function() {
    expect(lcm(60, 1)).to.equal(60);
    expect(lcm(60, -1)).to.equal(60);
  });

  it ('Should calculate least common multiple when x < 0', function() {
    expect(lcm(-60, 36)).to.equal(180);
    expect(lcm(-45, 30)).to.equal(90);
    expect(lcm(-42, 28)).to.equal(84);
  });

  it ('Should calculate least common multiple when y < 0', function() {
    expect(lcm(60, -36)).to.equal(180);
    expect(lcm(45, -30)).to.equal(90);
    expect(lcm(42, -28)).to.equal(84);
  });

  it ('Should calculate least common multiple when x,y < 0', function() {
    expect(lcm(-60, -36)).to.equal(180);
    expect(lcm(-45, -30)).to.equal(90);
    expect(lcm(-42, -28)).to.equal(84);
  });

  it ('Should return 0 when y == 0', function() {
    expect(lcm(1, 0)).to.equal(0);
    expect(lcm(-1, 0)).to.equal(0);
    expect(lcm(123, 0)).to.equal(0);
    expect(lcm(-123, 0)).to.equal(0);
  });

  it ('Should return 0 when x == 0', function() {
    expect(lcm(0, 1)).to.equal(0);
    expect(lcm(0, -1)).to.equal(0);
    expect(lcm(0, 123)).to.equal(0);
    expect(lcm(0, -123)).to.equal(0);
  });

  it ('Should return 0 when x == y == 0', function() {
    expect(lcm(0, 0)).to.equal(0);
    expect(lcm(-0, -0)).to.equal(0);
    expect(lcm(-0, 0)).to.equal(0);
    expect(lcm(0, -0)).to.equal(0);
  });
});

