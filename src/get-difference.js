const isEqual = require('lodash/isEqual');

const isObject = require('./helpers/is-object');

const getAddedPropDescription = require('./description-creators/get-added-prop-description');
const getDeletedPropDescription = require('./description-creators/get-deleted-prop-description');
const getModifiedPropDescription = require('./description-creators/get-modified-prop-description');
const getNotModifiedPropDescription = require('./description-creators/get-not-modified-prop-description');
const getObjectModifiedPropDescription = require('./description-creators/get-object-modified-prop-description');

const getDifference = (before, after) => {
  const afterProps = Object.keys(after);
  const beforeProps = Object.keys(before);

  // Prop was deleted
  const deletedProps = beforeProps
    .filter((beforeProp) => !Object.getOwnPropertyDescriptor(after, beforeProp))
    .map((beforeProp) => getDeletedPropDescription(before, beforeProp));

  return afterProps.reduce((acc, afterPropName) => {
    const afterPropValue = after[afterPropName];
    const beforePropValue = before[afterPropName];

    // Prop was added
    if (!Object.getOwnPropertyDescriptor(before, afterPropName)) {
      return [...acc, getAddedPropDescription(after, afterPropName)];
    }

    // Prop has not been changed
    if (isEqual(afterPropValue, beforePropValue)) {
      return [...acc, getNotModifiedPropDescription(after, afterPropName)];
    }

    // Prop is modified object
    if (isObject(afterPropValue) && isObject(beforePropValue)) {
      return [...acc,
        getObjectModifiedPropDescription(
          afterPropName,
          afterPropValue,
          beforePropValue,
          getDifference,
        ),
      ];
    }

    // Prop is modified object
    return [...acc, ...getModifiedPropDescription(after, before, afterPropName)];
  }, deletedProps);
};

module.exports = getDifference;
