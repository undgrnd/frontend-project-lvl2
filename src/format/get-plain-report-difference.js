const os = require('os');
const { getActionDescription } = require('./utils');

const { isPrimitive } = require('../utils');

const nonPrimitiveValueLiteral = '[complex value]';

const getFormattedPropValue = (value) => {
  const valueWithQuotesIfNeeded = typeof value === 'string' ? `'${value}'` : value;
  return isPrimitive(value) ? valueWithQuotesIfNeeded : nonPrimitiveValueLiteral;
};

const getPlainReportDifference = (report) => {
  if (!report) {
    return '';
  }

  const stringsList = [];

  const traverseTree = (tree, parentName) => {
    tree.forEach((prop) => {
      const createActionDescription = getActionDescription(prop.action);
      const combinedName = parentName ? `${parentName}.${prop.name}` : prop.name;

      switch (prop.action) {
        case 'added': {
          stringsList.push(createActionDescription(combinedName, getFormattedPropValue(prop.value)));
          break;
        }
        case 'deleted': {
          stringsList.push(createActionDescription(combinedName));
          break;
        }
        case 'modified': {
          stringsList.push(createActionDescription(combinedName,
            getFormattedPropValue(prop.value), getFormattedPropValue(prop.oldValue)));
          break;
        }
        case 'object modified': {
          traverseTree(prop.value, combinedName);
          break;
        }
        default:
      }
    });
  };

  traverseTree(report);

  return stringsList.join(os.EOL);
};

module.exports = { getPlainReportDifference };
