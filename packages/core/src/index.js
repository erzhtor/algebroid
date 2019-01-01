'use strict';
const Parser = require('./parser');
const Calculator = require('./calculator');

/**
 * Calculates math string expression
 * @param {string} expression 
 * @returns {string} result of the expression
 */
exports.calculate = function calculate(expression) {
    const parser = new Parser(expression);
    const calculator = new Calculator(parser.parse());
    return calculator.calculate();
};

exports.Calculator = Calculator;
exports.Parser = Parser;