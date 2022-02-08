const os = require('os');
const { getActionDescription } = require('./utils');

const { isPrimitive } = require('../utils');

const nonPrimitiveValueLiteral = '[complex value]';

const getPlainReportDifference = (report) => {
  if (!report) {
    return '';
  }

  const stringsList = [];

  // from: added, deleted, added while modifying,
  // deleted while modifying, not modified, object modified

  // to: added, deleted, modified

  const traverseTree = (tree, parentName) => {
    tree.forEach((prop) => {
      const createActionDescription = getActionDescription(prop.action);
      const valueLiteral = isPrimitive(prop.value) ? prop.value : nonPrimitiveValueLiteral;
      const combinedName = parentName ? `${parentName}.${prop.name}` : prop.name;

      switch (prop.action) {
        case 'added': {
          stringsList.push(createActionDescription(combinedName, valueLiteral));
          break;
        }
        case 'deleted': {
          stringsList.push(createActionDescription(combinedName));
          break;
        }
        case 'modified': {
          stringsList.push(createActionDescription(combinedName,
            valueLiteral, isPrimitive(prop.oldValue) ? prop.oldValue : nonPrimitiveValueLiteral));
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
