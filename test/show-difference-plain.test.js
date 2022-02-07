const getDifference = require('../src/get-difference');
const getPlainReportDifference = require('../src/format/get-plain-report-difference');

const before = require('./__fixtures__/before-nesting.json');
const after = require('./__fixtures__/after-nesting.json');

const result = 'Property group2 was removed\n'
  + 'Property common.setting2 was removed\n'
  + 'Property common.follow was added with value: false\n'
  + 'Property common.setting3 was updated. From true to [complex value]\n'
  + 'Property common.setting4 was added with value: blah blah\n'
  + 'Property common.setting5 was added with value: [complex value]\n'
  + 'Property common.setting6.ops was added with value: vops\n'
  + 'Property group1.baz was updated. From bas to bars\n'
  + 'Property group1.nest was updated. From [complex value] to str\n'
  + 'Property group3 was added with value: [complex value]';

test('Show difference as plain text', () => {
  const diff = getDifference(before, after);

  expect(getPlainReportDifference(diff))
    .toEqual(result);
});
