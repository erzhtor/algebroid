'use strict';
const BigNumber = require('bignumber.js');
const OPERATORS = require('./operators');

BigNumber.config({ EXPONENTIAL_AT: 1000 });

/**
 * Calculates postfix notated expression tokens
 * @param {string[]} tokens
 * @param {string} result
 */
module.exports = function calculatePostfix(tokens) {
    const operandStack = [];
    let token = tokens.shift();

    while (token) {
        const operator = OPERATORS.find(item => item.symbol === token);
        if (operator) {
            const secondOperand = operandStack.pop();
            const firstOperand = operandStack.pop();
            operandStack.push(operator.calculate(firstOperand, secondOperand));
        } else {
            const value = new BigNumber(token);
            if (!value.isNaN()) {
                operandStack.push(value);
            } else {
                throw new Error(`Unknown token: ${token}`);
            }
        }
        token = tokens.shift();
    }

    if (operandStack.length !== 1) {
        throw Error('Incorrect expression');
    }

    return operandStack.pop();
};
