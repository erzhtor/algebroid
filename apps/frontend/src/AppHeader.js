import React from "react";

export const AppHeader = () => (
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