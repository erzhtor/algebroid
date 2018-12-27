"use strict";
const BigNumber = require("bignumber.js");

module.exports = calculatePostfix;

/**
 * Calculates postfix notated expression
 * @param {string[]} tokens
 * @param {string} result
 */
function calculatePostfix(tokens) {
  const operandStack = [];
  let token = tokens.shift();

  function calculate(operator) {
    const secondOperand = operandStack.pop();
    const firstOperand = operandStack.pop();
    switch (operator) {
      case "/":
        operandStack.push(
          new BigNumber(firstOperand).div(new BigNumber(secondOperand))
        );
        break;
      case "*":
        operandStack.push(
          new BigNumber(firstOperand).times(new BigNumber(secondOperand))
        );
        break;
      case "-":
        operandStack.push(
          new BigNumber(firstOperand).minus(new BigNumber(secondOperand))
        );
        break;
      case "+":
        operandStack.push(
          new BigNumber(firstOperand).plus(new BigNumber(secondOperand))
        );
        break;
      case "%":
        operandStack.push(
          new BigNumber(firstOperand).mod(new BigNumber(secondOperand))
        );
        break;
    case "^":
        operandStack.push(
          new BigNumber(firstOperand).pow(new BigNumber(secondOperand))
        );
        break;
      default:
        throw Error(`Unknown operator: {operator}`);
    }
  }

  while (token) {
    if (["/", "*", "-", "+", "%", "^"].includes(token)) {
      calculate(token);
    } else {
      const value = new BigNumber(token);
      if (value.isNaN()) {
        throw new Error(`Operand "${token}" is NOT a number`);
      }
      operandStack.push(value);
    }
    token = tokens.shift();
  }
  const result = operandStack.pop();

  BigNumber.config({ EXPONENTIAL_AT: 1000 })

  return result.toString();
}
