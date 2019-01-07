import React from "react";

export const AppOutput = ({ result, expression, postfixTokens=[] }) => (
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
            <code>{postfixTokens.join(' ')}</code>
        </div>
    </section>
);