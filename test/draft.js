const path = require('path');

const { genDiff } = require('../src/lib');

const getFixturePath = (filename) => path.join(__dirname, '__fixtures__', filename);

const filepath1 = getFixturePath('before-nesting.json');

const filepath2 = getFixturePath('after-nesting.json');

test('Show difference as tree-structure', () => {
  expect(genDiff(filepath1, filepath2)).toEqual('');
});
