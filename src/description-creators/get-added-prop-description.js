const getAddedPropDescription = (after, propName) => ({
  action: 'added',
  name: propName,
  value: after[propName],
});

module.exports = getAddedPropDescription;
