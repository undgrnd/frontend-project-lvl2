const getModifiedPropDescription = (after, before, propName) => [
  {
    action: 'added while modifying',
    name: propName,
    value: after[propName],
  },
  {
    action: 'deleted while modifying',
    name: propName,
    value: before[propName],
  },
  {
    action: 'modified',
    name: propName,
    oldValue: before[propName],
    value: after[propName],
  },
];

module.exports = getModifiedPropDescription;
