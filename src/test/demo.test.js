import gendiff from '../gendiff';

const before = './src/test/__fixtures__/hexlet-request-before.json';
const after = './src/test/__fixtures__/hexlet-request-after.json';

const expectedResult = `{
- follow: false
  host: hexlet.io
- proxy: 123.234.53.22
+ timeout: 20
- timeout: 50
+ verbose: true
}`;

test('Hexlet request', () => {
  expect(gendiff(before, after)).toStrictEqual(expectedResult);
});
