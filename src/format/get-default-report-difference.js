const os = require('os');

const { isObject } = require('../utils');
const { getActionSign } = require('./utils');

const getDefaultReportDifference = (report, deepLevel = 1) => {
  if (!report) {
    return '';
  }

  const nestingPushingCharacters = '    '.repeat(deepLevel);

  const stringsList = report
    .filter((prop) => prop.action !== 'modified')
    .map((prop) => {
      const sign = getActionSign(prop.action);

      const valueType = (Array.isArray(prop.value) && 'array') || (isObject(prop.value) && 'object') || 'primitive';
      let value;

      switch (valueType) {
        case 'array':
          value = getDefaultReportDifference(prop.value, deepLevel + 1);
          break;
        case 'object':
          value = JSON.stringify(prop.value);
          break;
        default:
          value = prop.value;
      }

      return `${nestingPushingCharacters}${sign} ${prop.name}: ${value}${os.EOL}`;
    });

  return `{${os.EOL}${stringsList.join('')}${nestingPushingCharacters}}`;
};

module.exports = { getDefaultReportDifference };
