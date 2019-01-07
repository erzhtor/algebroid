import React, { Component } from "react";

export class AppExpression extends Component {
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