const program = require('commander');

export default () => program
  .version('0.1.0')
  .description('Compares two configuration files and shows a difference.')
  .parse(process.argv);
