'use strict';
const BigNumber = require('bignumber.js');
const OPERATORS = require('./operators');

BigNumber.config({ EXPONENTIAL_AT: 1000 });

/**
 * Calculates postfix notation expression
 */
module.exports = class Calculator {
    /**
     * @param {string[]} tokens postfix notation tokens
     */
    constructor(tokens) {
        this._tokens = tokens;
        this._operands = [];
    }

    _processToken(token) {
        const operator = OPERATORS.find(item => item.symbol === token);
        if (operator) {
            const secondOperand = this._operands.pop();
            const firstOperand = this._operands.pop();
            this._operands.push(operator.calculate(firstOperand, secondOperand));
            return;
        }

        const value = new BigNumber(token);
        if (!value.isNaN()) {
            this._operands.push(value);
        } else {
            throw new Error(`Unknown token: ${token}`);
        }
    }

    calculate() {
        for (const token of this._tokens) {
            this._processToken(token);
        }
    
        if (this._operands.length !== 1) {
            throw Error('Incorrect expression');
        }
    
        return this._operands.pop().toString();
    }
};
