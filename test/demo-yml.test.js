import gendiff from '../src/gendiff';

const before = './test/__fixtures__/hexlet-request-before.yml';
const after = './test/__fixtures__/hexlet-request-after.yml';

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
