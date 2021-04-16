#!/usr/bin/env node

const program = require('commander');
const showDifference = require('../show-difference');

const init = () => program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<firstConfig> <secondConfig>')
  .action((firstFile, secondFile) => {
    showDifference(firstFile, secondFile);
  })
  .parse(process.argv);

init();
