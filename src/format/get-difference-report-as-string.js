const os = require('os');

const isObject = require('../helpers/is-object');
const getDifferenceSign = require('./get-difference-sign');

const getDifferenceReportAsString = (report, deepLevel = 0) => {
  if (!report) {
    return '';
  }

  const nestingPushingCharacters = '  '.repeat(deepLevel);

  const string = report.map((prop) => {
    const sign = getDifferenceSign(prop.action);

    const valueType = (Array.isArray(prop.value) && 'array') || (isObject(prop.value) && 'object') || 'primitive';
    let value;

    switch (valueType) {
      case 'array':
        value = getDifferenceReportAsString(prop.value, deepLevel + 1);
        break;
      case 'object':
        value = JSON.stringify(prop.value);
        break;
      case 'primitive':
        value = prop.value;
        break;
      default:
        value = prop.value;
    }

    return `${nestingPushingCharacters}${sign} ${prop.name}: ${value}${os.EOL}`;
  });

  return `{${os.EOL}${string.join('')}${nestingPushingCharacters}}`;
};

module.exports = getDifferenceReportAsString;
