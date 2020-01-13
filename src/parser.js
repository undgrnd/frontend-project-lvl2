const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

export default (filePath) => {
  const filePathExtension = path.extname(filePath);
  const fileContent = fs.readFileSync(filePath, 'utf8');

  if (filePathExtension.includes('json')) {
    return JSON.parse(fileContent.toString());
  }

  if (filePathExtension.includes('yml')) {
    return yaml.safeLoad(fileContent);
  }

  return undefined;
};
