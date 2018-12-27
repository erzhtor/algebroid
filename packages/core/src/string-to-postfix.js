"use strict";

module.exports = stringToPostfix;
/**
 * Parses expression into tokens.
 * @param {string} expression
 * @returns {string[]} tokens
 */
function stringToPostfix(expression) {
  const infixTokens = expression
    .replace(/\s*([*\/\-+()%^])\s*/g, " $& ")
    .trim()
    .split(/\s+/);

  return infixToPostfix(infixTokens);
}

const PRECEDENCE = {
  "^": 4,
  "*": 3,
  "/": 3,
  "%": 3,
  "+": 2,
  "-": 2,
  "(": 1,
  ")": 1
};

/**
 * Converts infix tokens into postfix tokens
 * @param {string[]} tokens
 * @returns {string[]} postfix tokens
 */
const infixToPostfix = tokens => {
  const operatorsStack = [];
  const output = [];

  let token = tokens.shift();

  while (token) {
    switch (token) {
      case "(":
        operatorsStack.push(token);
        break;
      case ")":
        let operator = operatorsStack.pop();
        while (operator !== "(") {
          output.push(operator);
          operator = operatorsStack.pop();
        }
        break;
      case "+":
      case "-":
      case "*":
      case "/":
      case "%":
      case "^":
        while (operatorsStack.length > 0) {
          let lastOperator = operatorsStack[operatorsStack.length - 1];
          if (PRECEDENCE[lastOperator] < PRECEDENCE[token]) break;
          output.push(operatorsStack.pop());
        }
        operatorsStack.push(token);
        break;
      default:
        output.push(token);
        break;
    }
    token = tokens.shift();
  }
  while (operatorsStack.length > 0) {
    output.push(operatorsStack.pop());
  }
  return output;
};
