const getAddedPropDescription = require('./get-added-prop-description');
const getDeletedPropDescription = require('./get-deleted-prop-description');

const getModifiedPropDescription = (after, before, propName) => [
  getAddedPropDescription(after, propName),
  getDeletedPropDescription(before, propName),
];

module.exports = getModifiedPropDescription;
