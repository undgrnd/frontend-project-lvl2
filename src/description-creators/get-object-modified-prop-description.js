const getObjectModifiedPropDescription = (afterPropName, afterPropValue, beforePropValue, cb) => ({
  action: 'object modified',
  name: afterPropName,
  value: cb(beforePropValue, afterPropValue),
});

module.exports = getObjectModifiedPropDescription;
