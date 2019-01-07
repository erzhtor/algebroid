'use strict';
const program = require('commander');
const {calculate} = require('@algebroid/core');
const packageJson = require('../package.json');

program
    .version(packageJson.version)
    .arguments('<expression>')
    .action(function(expression) {
        console.log(calculate(expression));
    });

program.parse(process.argv);
