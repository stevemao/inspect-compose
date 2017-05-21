const compose = require('./');
const curry = require('inspect-curry');

var add = curry(function add(x, y){ return x + y });
var map = curry(function map(f, xs){ return xs.map(f) });
var head = function(xs) {return xs[0];};

var inc = add(1);
var incFirst = compose(head, map(inc))

test('incFirst', () => {
  var incFirst = compose(head, map(inc))

  expect(incFirst.toString()).toBe('compose(function (xs) {return xs[0];}, map(add(1)))');
});

test('incFirstThenAdd', () => {
  var incFirstThenAdd = compose(add(2), incFirst)

  expect(incFirstThenAdd.toString()).toBe('compose(add(2), compose(function (xs) {return xs[0];}, map(add(1))))');
});
