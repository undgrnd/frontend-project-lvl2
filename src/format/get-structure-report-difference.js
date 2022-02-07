const stableJSONStringify = require('safe-stable-stringify');

const getStructureReportDifference = (report) => {
  if (!report) {
    return '';
  }

  return stableJSONStringify(report);
};

module.exports = getStructureReportDifference;
