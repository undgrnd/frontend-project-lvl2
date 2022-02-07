const fs = require('fs');

const getDifference = require('./get-difference');
const getDefaultReportDifference = require('./format/get-default-report-difference');
const getPlainReportDifference = require('./format/get-plain-report-difference');

const showDifference = (firstFilePath, secondFilePath, format) => {
  const firstFileContent = fs.readFileSync(firstFilePath, 'utf8');
  const secondFileContent = fs.readFileSync(secondFilePath, 'utf8');

  const firstFileContentJson = JSON.parse(firstFileContent);
  const secondFileContentJson = JSON.parse(secondFileContent);

  if (format === 'plain') {
    return process.stdout.write(getPlainReportDifference(getDifference(
      firstFileContentJson,
      secondFileContentJson,
    )));
  }

  return process.stdout.write(getDefaultReportDifference(getDifference(
    firstFileContentJson,
    secondFileContentJson,
  )));
};

module.exports = showDifference;
