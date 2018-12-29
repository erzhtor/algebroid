'use strict';
const OPERATORS = require('./operators'); 

const BRACE_END = ')';
const BRACE_START = '(';
const OPERATOR_SYMBOLS = OPERATORS.map(({symbol}) => symbol);

/**
 * Parses infix notation expression into postfix notation
 */
module.exports = class Parser {
    /**
     * @param {string} expression infix notation string
     */
    constructor(expression){
        this.expression = expression;
        this._stack = []; // stack for operators, braceEnd, braceStart
        this._postfix = []; // postfix tokens result array
    }

    _precedence(token) {
        const operator = OPERATORS.find(
            item => item.symbol === token
        );
        return operator ? operator.precedence : 0;
    }

    _processToken(token) {
        if (token === BRACE_START) { // handle '('
            this._stack.push(token);
        } else if (token === BRACE_END) { // handle ')'
            let operator = this._stack.pop();
            while (operator !== BRACE_START) {
                this._postfix.push(operator);
                operator = this._stack.pop();
            }
        } else if (OPERATOR_SYMBOLS.includes(token)){ // handle operators
            while (this._stack.length > 0
            && this._precedence(token) <= this._precedence(this._stack[this._stack.length - 1])) {
                this._postfix.push(this._stack.pop());
            }
            this._stack.push(token);
        } else {
            this._postfix.push(token);
        }
    }

    parse() {
        const tokens = this.expression
            .replace(/\s*([*/\-+()%^])\s*/g, ' $& ') // add spaces between operators
            .trim()
            .split(/\s+/);

        for (const token of tokens) {
            this._processToken(token);
        }

        while (this._stack.length > 0) {
            this._postfix.push(this._stack.pop());
        }

        return this._postfix;
    }
};
