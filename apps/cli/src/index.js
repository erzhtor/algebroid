const program = require('commander');
const {calculate} = require('@algebroid/core');
const packageJson = require('../package.json');

program
    .version(packageJson.version)
    .arguments('<expression>')
    .action(function(expression) {
        console.log(calculate(expression));
    });

program.on('--help', function() {
    console.log('');
    console.log('Example: @algebroid "12 + 12 ^ 76 - 12"');
});
program.parse(process.argv);
