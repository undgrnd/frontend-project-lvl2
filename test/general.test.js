import gendiff from '../src/gendiff';

const before = './test/__fixtures__/before.json';
const after = './test/__fixtures__/after.json';

const expectedResult = `{
- follow: false
  host: hexlet.io
- proxy: 123.234.53.22
+ timeout: 20
- timeout: 50
+ verbose: true
}`;

test('General', () => {
  expect(gendiff(before, after)).toStrictEqual(expectedResult);
});
