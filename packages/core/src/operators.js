const BigNumber = require('bignumber.js');

class Operator {
    constructor(precedence, symbol, action) {
        this.precedence = precedence;
        this.symbol = symbol;
        this.action = action;
    }

    calculate(first, second) {
        return this.action(first, second);
    }
}

const POWER = new Operator(4, '^', (first, second) =>
    new BigNumber(first).pow(new BigNumber(second))
);
const MULTIPLY = new Operator(3, '*', (first, second) =>
    new BigNumber(first).times(new BigNumber(second))
);
const DIVIDE = new Operator(3, '/', (first, second) =>
    new BigNumber(first).div(new BigNumber(second))
);
const MODULO = new Operator(3, '%', (first, second) =>
    new BigNumber(first).mod(new BigNumber(second))
);
const ADD = new Operator(2, '+', (first, second) =>
    new BigNumber(first).plus(new BigNumber(second))
);
const SUBTRACT = new Operator(2, '-', (first, second) =>
    new BigNumber(first).minus(new BigNumber(second))
);

module.exports = [POWER, MULTIPLY, DIVIDE, MODULO, ADD, SUBTRACT];
