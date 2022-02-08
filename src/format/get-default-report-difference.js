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

      const pushingCharacters = nestingPushingCharacters.substr(0, nestingPushingCharacters.length - 2);

      return `${pushingCharacters}${sign} ${prop.name}: ${value}${os.EOL}`;
    });

  const closeBracketPushingCharacters = '    '.repeat(deepLevel - 1);
  return `{${os.EOL}${stringsList.join('')}${closeBracketPushingCharacters}}`;
};

module.exports = { getDefaultReportDifference };
