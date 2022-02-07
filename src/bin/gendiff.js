#!/usr/bin/env node

const program = require('commander');
const packageJSON = require('../../package.json');
const showDifference = require('../show-difference');

const init = () => program
  .version(packageJSON.version)
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<firstConfigPath> <secondConfigPath>')
  .action((firstFile, secondFile) => {
    showDifference(firstFile, secondFile);
  })
  .parse(process.argv);

init();
