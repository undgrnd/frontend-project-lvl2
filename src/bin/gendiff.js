#!/usr/bin/env node

import program from 'commander';
import gendiff from '../gendiff';

const init = () => program
  .version('0.1.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<firstConfig> <secondConfig>')
  .action((firstConfig, secondConfig) => {
    console.log(gendiff(firstConfig, secondConfig));
  })
  .option('-f, --format <type>', 'Output format')
  .parse(process.argv);

init();
