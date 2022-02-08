const { getDifference } = require('../src/get-difference');

const before = require('./__fixtures__/before-nesting.json');
const after = require('./__fixtures__/after-nesting.json');

const before2 = require('./__fixtures__/before-nesting.json');
const after2 = require('./__fixtures__/after-nesting.json');

test('Get difference in nesting structures', () => {
  expect(getDifference(before, after)).toMatchSnapshot();
});

test('Get difference in nesting structures 2', () => {
  expect(getDifference(before2, after2)).toMatchSnapshot();
});
