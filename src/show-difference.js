const fs = require('fs');

const getDifference = require('./get-difference');
const formatOutput = require('./format/get-difference-report-as-string');

const showDifference = (firstFilePath, secondFilePath) => {
  const firstFileContent = fs.readFileSync(firstFilePath, 'utf8');
  const secondFileContent = fs.readFileSync(secondFilePath, 'utf8');

  const firstFileContentJson = JSON.parse(firstFileContent);
  const secondFileContentJson = JSON.parse(secondFileContent);

  return process.stdout.write(formatOutput(getDifference(
    firstFileContentJson,
    secondFileContentJson,
  )));
};

module.exports = showDifference;
