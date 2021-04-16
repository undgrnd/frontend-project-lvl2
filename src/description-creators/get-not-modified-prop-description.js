const getNotModifiedPropDescription = (after, propName) => ({
  action: 'not modified',
  name: propName,
  value: after[propName],
});

module.exports = getNotModifiedPropDescription;
