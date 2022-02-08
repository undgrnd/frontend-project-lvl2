const { getDifference } = require('../src/get-difference');
const { getPlainReportDifference } = require('../src/format/get-plain-report-difference');

const before = require('./__fixtures__/before-nesting.json');
const after = require('./__fixtures__/after-nesting.json');

const before2 = require('./__fixtures__/before-nesting-2.json');
const after2 = require('./__fixtures__/after-nesting-2.json');

test('Show difference as plain text', () => {
  const diff = getDifference(before, after);

  expect(getPlainReportDifference(diff)).toMatchSnapshot();
});

test('Show difference as plain text 2', () => {
  const diff = getDifference(before2, after2);

  expect(getPlainReportDifference(diff)).toMatchSnapshot();
});
