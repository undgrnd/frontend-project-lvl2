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

const getModifiedPropDescription = (after, before, propName) => [
  {
    action: 'deleted while modifying',
    name: propName,
    value: before[propName],
  },
  {
    action: 'added while modifying',
    name: propName,
    value: after[propName],
  },
  {
    action: 'modified',
    name: propName,
    oldValue: before[propName],
    value: after[propName],
  },
];

const getNotModifiedPropDescription = (after, propName) => ({
  action: 'not modified',
  name: propName,
  value: after[propName],
});

const getObjectModifiedPropDescription = (afterPropName, afterPropValue, beforePropValue, cb) => ({
  action: 'object modified',
  name: afterPropName,
  value: cb(beforePropValue, afterPropValue),
});

module.exports = {
  getAddedPropDescription,
  getDeletedPropDescription,
  getModifiedPropDescription,
  getNotModifiedPropDescription,
  getObjectModifiedPropDescription,
};
