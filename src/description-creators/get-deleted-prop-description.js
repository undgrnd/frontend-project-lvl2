const getDeletedPropDescription = (before, propName) => ({
  action: 'deleted',
  name: propName,
  value: before[propName],
});

module.exports = getDeletedPropDescription;
