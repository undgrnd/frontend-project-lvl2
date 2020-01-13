import jsonToString from './json-to-string';
import parser from './parser';

export default (pathToFile1, pathToFile2) => {
  const file1 = parser(pathToFile1);
  const file2 = parser(pathToFile2);

  const onlyNewProperties = Object.keys(file2).reduce((acc, property) => {
    if (!file1[property] || file2[property] !== file1[property]) {
      return [...acc, {
        action: 'added',
        name: property,
        value: file2[property],
      }];
    }
    return acc;
  }, []);

  const diff = Object.keys(file1).reduce((acc, property) => {
    if (!file2[property] || file2[property] !== file1[property]) {
      return [...acc, {
        action: 'deleted',
        name: property,
        value: file1[property],
      }];
    }
    if (file2[property] === file1[property]) {
      return [...acc, {
        action: 'not changed',
        name: property,
        value: file1[property],
      }];
    }
    return acc;
  }, onlyNewProperties)
  // eslint-disable-next-line no-nested-ternary
    .sort((a, b) => ((a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)));

  return jsonToString(diff);
};
