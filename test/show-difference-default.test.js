const { getDifference } = require('../src/get-difference');
const { getDefaultReportDifference } = require('../src/format/get-default-report-difference');

const before = require('./__fixtures__/before-nesting.json');
const after = require('./__fixtures__/after-nesting.json');

const before2 = require('./__fixtures__/before-nesting-2.json');
const after2 = require('./__fixtures__/after-nesting-2.json');

test('Show difference as tree-structure', () => {
  expect(getDefaultReportDifference(getDifference(before, after))).toMatchSnapshot();
});

test('Show difference as tree-structure 2', () => {
  expect(getDefaultReportDifference(getDifference(before2, after2))).toMatchSnapshot();
});
