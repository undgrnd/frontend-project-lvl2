const getDifference = require('../src/get-difference');
const getDifferenceReportAsString = require('../src/format/get-default-report-difference');

const before = require('./__fixtures__/before-nesting.json');
const after = require('./__fixtures__/after-nesting.json');

const result = '{\n'
  + '- group2: {"abc":12345}\n'
  + '  common: {\n'
  + '  - setting2: 200\n'
  + '  + follow: false\n'
  + '    setting1: Value 1\n'
  + '  + setting3: {"key":"value"}\n'
  + '  - setting3: true\n'
  + '  + setting4: blah blah\n'
  + '  + setting5: {"key5":"value5"}\n'
  + '    setting6: {\n'
  + '      key: value\n'
  + '    + ops: vops\n'
  + '    }\n'
  + '  }\n'
  + '  group1: {\n'
  + '    foo: bar\n'
  + '  + baz: bars\n'
  + '  - baz: bas\n'
  + '  + nest: str\n'
  + '  - nest: {"key":"value"}\n'
  + '  }\n'
  + '+ group3: {"fee":100500}\n'
  + '}';

test('Get difference in nesting structures', () => {
  expect(getDifferenceReportAsString(getDifference(before, after)))
    .toEqual(result);
});
