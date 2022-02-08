const { getDifference } = require('../src/get-difference');
const { getStructureReportDifference } = require('../src/format/get-structure-report-difference');

const before = require('./__fixtures__/before-nesting.json');
const after = require('./__fixtures__/after-nesting.json');

test('Show difference as JSON', () => {
  const diff = getDifference(before, after);

  expect(getStructureReportDifference(diff)).toMatchSnapshot();
});
