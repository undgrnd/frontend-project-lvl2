const isEqual = require('lodash/isEqual');

const isObject = require('./helpers/is-object');

const getAddedPropDescription = require('./description-creators/get-added-prop-description');
const getDeletedPropDescription = require('./description-creators/get-deleted-prop-description');
const getModifiedPropDescription = require('./description-creators/get-modified-prop-description');
const getNotModifiedPropDescription = require('./description-creators/get-not-modified-prop-description');
const getObjectModifiedPropDescription = require('./description-creators/get-object-modified-prop-description');

const getDifference = (firstObject, secondObject) => {
  const firstObjectProps = Object.keys(firstObject);
  const secondObjectProps = Object.keys(secondObject);

  // Prop was deleted
  const deletedProps = firstObjectProps
    .filter((firstObjectProp) => !Object.getOwnPropertyDescriptor(secondObject, firstObjectProp))
    .map((firstObjectProp) => getDeletedPropDescription(firstObject, firstObjectProp));

  return secondObjectProps.reduce((acc, secondObjectPropName) => {
    const secondObjectPropValue = secondObject[secondObjectPropName];
    const firstObjectPropValue = firstObject[secondObjectPropName];

    // Prop was added
    if (!Object.getOwnPropertyDescriptor(firstObject, secondObjectPropName)) {
      return [...acc, getAddedPropDescription(secondObject, secondObjectPropName)];
    }

    // Prop has not been changed
    if (isEqual(secondObjectPropValue, firstObjectPropValue)) {
      return [...acc, getNotModifiedPropDescription(secondObject, secondObjectPropName)];
    }

    // Prop is modified object
    if (isObject(secondObjectPropValue) && isObject(firstObjectPropValue)) {
      return [...acc,
        getObjectModifiedPropDescription(
          secondObjectPropName,
          secondObjectPropValue,
          firstObjectPropValue,
          getDifference,
        ),
      ];
    }

    // Prop is modified object
    return [...acc, ...getModifiedPropDescription(secondObject, firstObject, secondObjectPropName)];
  }, deletedProps);
};

module.exports = getDifference;
