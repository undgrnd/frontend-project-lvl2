import gendiff from '../src/gendiff';

const before = './test/__fixtures__/before.yml';
const after = './test/__fixtures__/after.yml';

const expectedResult = `{
- follow: false
  host: hexlet.io
- proxy: 123.234.53.22
+ timeout: 20
- timeout: 50
+ verbose: true
}`;

test('Yml', () => {
  expect(gendiff(before, after)).toStrictEqual(expectedResult);
});
