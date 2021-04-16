const getDifference = require('../src/get-difference');

const before = require('./__fixtures__/before.json');
const after = require('./__fixtures__/after.json');
const difference = require('./__fixtures__/difference.json');

test('Get difference', () => {
  expect(getDifference(before, after)).toEqual(difference);
});
