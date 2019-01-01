import React, { Component } from "react";
import { Calculator, Parser } from "@algebra/core";

import "./App.css";

const AppHeader = () => (
    <header className="header">
        <div className="header__left">
            <h1 className="header__title">Algebroid</h1>
            <span className="header__info">
                open source expression calculator
            </span>
        </div>
        <div className="header__right">
            <span>Supports large numbers.</span>
            <br />
            <span>Supported operators: + - / * % ^</span>
        </div>
    </header>
);

class AppExpression extends Component {
    state = {};

    onValueChange(event) {
        this.setState({ value: event.target.value });
    }

    onKeyDown(event) {
        if (event.keyCode === 13) {
            this.props.onCalculate(this.state.value);
        }
    }

    render() {
        return (
            <section className="expression">
                <input
                    value={this.state.value}
                    className="expression__input"
                    placeholder="Enter what you want to calculate. Ex: 111 + 22 * (-4 / 2) ^ 3"
                    onChange={this.onValueChange.bind(this)}
                    onKeyDown={this.onKeyDown.bind(this)}
                />
                <button
                    className="expression__btn"
                    onClick={() => this.props.onCalculate(this.state.value)}
                >
                    calculate
                </button>
            </section>
        );
    }
}
const AppOutput = ({ result, expression, postfixNotation=[] }) => (
    <section className="result">
        <div className="result__item">
            <span>Expression</span>
            <code>{expression}</code>
        </div>
        <div className="result__item">
            <span>Result</span>
            <code>{result}</code>
        </div>
        <div className="result__item">
            <span>Postfix notation</span>
            <code>{postfixNotation.join(' ')}</code>
        </div>
    </section>
);

export default class App extends Component {
    state = {};

    onCalculate(expression) {
        try {
            const postfixNotation = new Parser(expression).parse();
            const result = new Calculator(postfixNotation).calculate();
            this.setState({
                postfixNotation,
                result,
                expression,
                error: null
            });
        } catch (error) {
            this.setState({
                error
            });
        }
    }

    render() {
        const { expression, result, postfixNotation, error } = this.state;
        return (
            <div className="App">
                <a href="#" className="github-link">
                    Github
                </a>
                <AppHeader />
                <AppExpression onCalculate={this.onCalculate.bind(this)} />
                {error && <font color="red">{error}</font>}
                <AppOutput
                    expression={expression}
                    result={result}
                    postfixNotation={postfixNotation}
                />
            </div>
        );
    }
}
