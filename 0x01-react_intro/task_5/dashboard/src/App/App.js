import React from "react";
import './App.css';
import { Component } from "react";
import logo from '../assets/Holberton-logo.jpg';
import { getFooterCopy, getFullYear } from "../utils/utils";


class App extends Component {
    onLabelClick = (inputId) => {
        const inputElement = document.getElementById(inputId);
        if (inputElement) {
            inputElement.focus();
        }
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>School dashboard</h1>
                </header>
                <div className="App-body">
                    <p>Login to access the full dashboard</p>
                    
                    <label htmlFor="email" onClick={() => this.onLabelClick('email')}>Email:</label>
                    <input className="email" type="email" name="email" />
                    
                    <label htmlFor="password" onClick={() => this.onLabelClick('password')}>Password:</label>
                    <input className="password" type="password" name="password" />
                    
                    <input type="button" className="okButton" name="okButton" value='OK' />
                </div>
                <div className="App-footer">
                    <p>Copyright { getFullYear() } - { getFooterCopy() } </p>
                </div>
            </div>
        );
    }
}

export default App