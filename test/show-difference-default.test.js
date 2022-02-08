const { getDifference } = require('../src/get-difference');
const { getDefaultReportDifference } = require('../src/format/get-default-report-difference');

const before = require('./__fixtures__/before-nesting.json');
const after = require('./__fixtures__/after-nesting.json');

test('Show difference as tree-structure', () => {
  expect(getDefaultReportDifference(getDifference(before, after))).toMatchSnapshot();
});
