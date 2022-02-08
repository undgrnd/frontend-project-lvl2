const { getDifference } = require('../src/get-difference');
const { getStructureReportDifference } = require('../src/format/get-structure-report-difference');

const before = require('./__fixtures__/before-nesting.json');
const after = require('./__fixtures__/after-nesting.json');

const result = '[{"action":"deleted","name":"group2","value":{"abc":12345}},{"action":"object modified","name":"common","value":[{"action":"deleted","name":"setting2","value":200},{"action":"added","name":"follow","value":false},{"action":"not modified","name":"setting1","value":"Value 1"},{"action":"added while modifying","name":"setting3","value":{"key":"value"}},{"action":"deleted while modifying","name":"setting3","value":true},{"action":"modified","name":"setting3","oldValue":true,"value":{"key":"value"}},{"action":"added","name":"setting4","value":"blah blah"},{"action":"added","name":"setting5","value":{"key5":"value5"}},{"action":"object modified","name":"setting6","value":[{"action":"not modified","name":"key","value":"value"},{"action":"added","name":"ops","value":"vops"}]}]},{"action":"object modified","name":"group1","value":[{"action":"not modified","name":"foo","value":"bar"},{"action":"added while modifying","name":"baz","value":"bars"},{"action":"deleted while modifying","name":"baz","value":"bas"},{"action":"modified","name":"baz","oldValue":"bas","value":"bars"},{"action":"added while modifying","name":"nest","value":"str"},{"action":"deleted while modifying","name":"nest","value":{"key":"value"}},{"action":"modified","name":"nest","oldValue":{"key":"value"},"value":"str"}]},{"action":"added","name":"group3","value":{"fee":100500}}]';

test('Show difference as plain text', () => {
  const diff = getDifference(before, after);

  expect(getStructureReportDifference(diff))
    .toEqual(result);
});
