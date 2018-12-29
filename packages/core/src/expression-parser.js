'use strict';
const OPERATORS = require('./operators'); 

const BRACE_END = ')';
const BRACE_START = '(';

/**
 * Converts infix tokens into postfix
 * @param {string[]} tokens
 * @returns {string[]} postfix tokens
 */
function convertToPostfix(tokens) {
    const operatorsStack = [];
    const postfixTokens = [];

    for (let token of tokens) {
        if (token === BRACE_START) {
            operatorsStack.push(token);
            continue;
        }

        if (token === BRACE_END) {
            let operator = operatorsStack.pop();
            while (operator !== BRACE_START) {
                postfixTokens.push(operator);
                operator = operatorsStack.pop();
            }
            continue;
        }

        const operator = OPERATORS.find(item => item.symbol === token);
        if (operator) {
            while (operatorsStack.length > 0) {
                let lastSymbol = operatorsStack[operatorsStack.length - 1];
                const lastOperator = OPERATORS.find(
                    item => item.symbol === lastSymbol
                ) || {};
                if ((lastOperator.precedence || 0) < operator.precedence) {
                    break;
                }
                postfixTokens.push(operatorsStack.pop());
            }
            operatorsStack.push(token);
            continue;
        }

        postfixTokens.push(token);
    }

    while (operatorsStack.length > 0) {
        postfixTokens.push(operatorsStack.pop());
    }

    return postfixTokens;
}

/**
 * Parses expression into tokens.
 * @param {string} expression
 * @returns {string[]} tokens
 */
module.exports = function parse(expression) {
    const tokens = expression
        .replace(/\s*([*/\-+()%^])\s*/g, ' $& ') // add spaces between operators
        .trim()
        .split(/\s+/);

    return convertToPostfix(tokens);
};
