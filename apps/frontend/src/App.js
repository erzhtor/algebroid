import React, { Component } from "react";
import { Calculator, Parser } from "@algebroid/core";

import {AppExpression} from "./AppExpression";
import {AppHeader} from "./AppHeader";
import {AppOutput} from "./AppOutput";

class App extends Component {
    state = {};

    onCalculate(expression) {
        try {
            const postfixTokens = new Parser(expression).parse();
            const result = new Calculator(postfixTokens).calculate();
            this.setState({
                postfixTokens,
                result,
                expression,
                error: null
            });
        } catch (error) {
            console.log(error);
            this.setState({
                error
            });
        }
    }

    render() {
        const { expression, result, postfixTokens, error } = this.state;
        return (
            <div className="App">
                <a href="https://github.com/erzhtor/algebroid" className="github-link">
                    Github
                </a>
                <AppHeader />
                <AppExpression onCalculate={this.onCalculate.bind(this)} />
                {error && <p className="error">Error occured: {error.toString()}</p>}
                <AppOutput
                    expression={expression}
                    result={result}
                    postfixTokens={postfixTokens}
                />
            </div>
        );
    }
}

export default App;