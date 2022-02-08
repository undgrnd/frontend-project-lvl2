const { showDifference } = require('./show-difference');

function genDiff(firstFilePath, secondFilePath, format) {
  return showDifference(firstFilePath, secondFilePath, format);
}

module.exports = genDiff;
