import logo from './holberton-logo.jpg';
import './App.css';
import './utils'
import React from 'react';
import { Component } from 'react';
import { getFooterCopy, getFullYear } from './utils';

class App extends Component {
  onLabelClick = (inpuId) => {
    const inputElement = document.getElementById(inpuId);
    if (inputElement) {
      inputElement.focus();
    }
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1>School dashboard</h1>
        </header>
        <div className='App-body'>
          <p>Login to access the full dashboard</p>
          <label htmlFor='email' onClick={() => this.onLabelClick('email')}>Email:</label>
          <input className='email' type='email' name='email' />
          <label htmlFor='password' onClick={() => this.onLabelClick('password')}>Password:</label>
          <input className='password' type='password' name='password' />
          <input className='ok' type='button' name='ok_button' value='OK' />
        </div>
        <div className='App-footer'>
          <p>Copyright { getFullYear() } - { getFooterCopy() } </p>
        </div>
      </div>
    );
  }
}

export default App;
