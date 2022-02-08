#!/usr/bin/env node

const program = require('commander');
const packageJSON = require('../../package.json');
const { genDiff } = require('../lib');

const init = () => program
  .version(packageJSON.version)
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<firstConfigPath> <secondConfigPath>')
  .action((firstFile, secondFile) => {
    process.stdout.write(genDiff(firstFile, secondFile, program.opts().format));
  })
  .parse(process.argv);

init();
