'use strict';
const stringToPostfix = require('./string-to-postfix');
const calculatePostfix = require('./calculate-postfix');

/**
 * Calculates string mathematical expression
 * @param {string} expression 
 * @returns {string | number} result of the expression
 */
function calculate(expression) {
    return calculatePostfix(stringToPostfix(expression));
}

exports.calculate = calculate;
