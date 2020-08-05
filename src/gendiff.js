import isEqual from 'lodash/isEqual';
import jsonToString from './json-to-string';
import parser from './parser';

const isObject = (entity) => typeof entity === 'object' && entity !== null;

const getModifiedPropDescription = (after, before, propName) => [
  {
    action: 'added',
    name: propName,
    value: after[propName],
  },
  {
    action: 'deleted',
    name: propName,
    value: before[propName],
  },
];

const getNotModifiedPropDescription = (after, propName) => ({
  action: 'not modified',
  name: propName,
  value: after[propName],
});

const getAddedPropDescription = (after, propName) => ({
  action: 'added',
  name: propName,
  value: after[propName],
});

const getDeletedPropDescription = (before, propName) => ({
  action: 'deleted',
  name: propName,
  value: before[propName],
});

const getDiff = (before, after) => {
  const afterProps = Object.keys(after);
  const beforeProps = Object.keys(before);

  // 2. Проп удален
  const deletedProps = beforeProps
    .filter((beforeProp) => !(beforeProp in after))
    .map((beforeProp) => getDeletedPropDescription(before, beforeProp));

  return afterProps.reduce((acc, afterPropName) => {
    const afterPropValue = after[afterPropName];
    const beforePropValue = before[afterPropName];

    // 1. Проп добавлен
    if (!(afterPropName in before)) {
      return [...acc, getAddedPropDescription(after, afterPropName)];
    }

    // 3. Проп не изменен
    if (isEqual(afterPropValue, beforePropValue)) {
      return [...acc, getNotModifiedPropDescription(after, afterPropName)];
    }

    // 5. Пропы объект и изменен
    if (isObject(afterPropValue) && isObject(beforePropValue)) {
      return [...acc, {
        action: 'object modified',
        name: afterPropName,
        value: getDiff(afterPropValue, beforePropValue),
      }];
    }

    // 4. Проп не объект и изменен
    return [...acc, ...getModifiedPropDescription(after, before, afterPropName)];
  }, deletedProps);
};

export default (beforePath, afterPath) => {
  const before = parser(beforePath);
  const after = parser(afterPath);

  const diff = getDiff(before, after);

  return jsonToString(diff);
};

// 1. Проп добавлен
// 2. Проп удален
// 3. Проп не изменен
// 4. Проп не объект и изменен
// 5. Проп объект и изменен
