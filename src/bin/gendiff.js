#!/usr/bin/env node

const program = require('commander');

const init = () => program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .parse(process.argv);

init();
