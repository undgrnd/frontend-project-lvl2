const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const { getDifference } = require('./get-difference');
const { getDefaultReportDifference } = require('./format/get-default-report-difference');
const { getPlainReportDifference } = require('./format/get-plain-report-difference');
const { getStructureReportDifference } = require('./format/get-structure-report-difference');

const showDifference = (firstFilePath, secondFilePath, format) => {
  const filesExtension = [
    path.extname(firstFilePath), path.extname(secondFilePath),
  ];

  const isYaml = filesExtension.some((ext) => ext === '.yml' || ext === '.yaml');

  let firstFileContent;
  let secondFileContent;

  if (isYaml) {
    firstFileContent = yaml.load(fs.readFileSync(firstFilePath, 'utf8'));
    secondFileContent = yaml.load(fs.readFileSync(secondFilePath, 'utf8'));
  } else {
    firstFileContent = JSON.parse((fs.readFileSync(firstFilePath, 'utf8')));
    secondFileContent = JSON.parse((fs.readFileSync(secondFilePath, 'utf8')));
  }

  if (format === 'plain') {
    return getPlainReportDifference(getDifference(
      firstFileContent,
      secondFileContent,
    ));
  }

  if (format === 'json') {
    return getStructureReportDifference(getDifference(
      firstFileContent,
      secondFileContent,
    ));
  }

  return getDefaultReportDifference(getDifference(
    firstFileContent,
    secondFileContent,
  ));
};

module.exports = { showDifference };
