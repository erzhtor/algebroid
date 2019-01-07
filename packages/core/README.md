# @algebroid/core
JavaScript Library for:
- Parsing infix to postfix notation.
- Calculating postfix notation.
- Or all at once: calculating string math expression.

Supports:
- large numbers.
- Operators: `+` `-` `/` `*` `%` `^`.

## Usage
Install:
`npm i @algebroid/core --save`

Use:
```js
const {calculate} = require('@algebroid/core');
const result = calculate("123 + 222 - ( 23 * 45 / 3 ) + 2 ^ 32");

```

## API Documentation

- **`calculate`**: function. `(expression: string) => string`. Calculates given string math expression and returns result.
    Example: 
    ```js
    const {calculate} = require('@algebroid/core');
    const result = calculate("1 + 2 - 300000000000000000000000");
    ```

- **`Parser`**: class. `constructor(expression: string)`. Converts infix to postfix notation.
Methods:
    - `parse(): string[]`. parses and returns array of tokens in postfix notation.
Example:
    ```js
    const {Parser} = require('@algebroid/core');
    const parser = new Parser("1 + 2 - 300000000000000000000000");
    const postfix = parser.parse();
    ```

- **`Calculator`**: class. `constructor(postfixTokens: string[])`. Calculates postfix notated tokens.
Methods:
    - `calculate(): string`. calculates and returns result
*Example*:
    ```js
    const {Calculator} = require('@algebroid/core');
    const calculator = new Calculator(["5", "2", "*"]);
    const result = calculator.calculate();
    ```
