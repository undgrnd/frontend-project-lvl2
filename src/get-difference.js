const isEqual = require('lodash/isEqual');

const { isObject } = require('./utils');

const {
  getAddedPropDescription,
  getDeletedPropDescription,
  getModifiedPropDescription,
  getNotModifiedPropDescription,
  getObjectModifiedPropDescription,
} = require('./prop-actions-descriptions');

const sortAlphabetically = (a, b) => a.name.localeCompare(b.name);

const getDifference = (firstObject, secondObject) => {
  const firstObjectProps = Object.keys(firstObject);
  const secondObjectProps = Object.keys(secondObject);

  const deletedProps = firstObjectProps
    .filter((firstObjectProp) => !Object.getOwnPropertyDescriptor(secondObject, firstObjectProp))
    .map((firstObjectProp) => getDeletedPropDescription(firstObject, firstObjectProp))
    .sort(sortAlphabetically);

  return secondObjectProps.reduce((acc, secondObjectPropName) => {
    const secondObjectPropValue = secondObject[secondObjectPropName];
    const firstObjectPropValue = firstObject[secondObjectPropName];

    const isPropAdded = !Object.getOwnPropertyDescriptor(firstObject, secondObjectPropName);

    if (isPropAdded) {
      return [...acc, getAddedPropDescription(secondObject, secondObjectPropName)];
    }

    const isPropNotModified = isEqual(secondObjectPropValue, firstObjectPropValue);

    if (isPropNotModified) {
      return [...acc, getNotModifiedPropDescription(secondObject, secondObjectPropName)];
    }

    const ifPropIsModifiedObject = isObject(secondObjectPropValue)
      && isObject(firstObjectPropValue);

    if (ifPropIsModifiedObject) {
      return [...acc,
        getObjectModifiedPropDescription(
          secondObjectPropName,
          secondObjectPropValue,
          firstObjectPropValue,
          getDifference,
        ),
      ];
    }

    // Prop is modified
    return [...acc, ...getModifiedPropDescription(secondObject, firstObject, secondObjectPropName)];
  }, deletedProps).sort(sortAlphabetically);
};

module.exports = { getDifference };
