import { Component } from 'react';
import React from "react";
import './Login.css';

class Login extends Component {
    onLabelClick = (inpuId) => {
      const inputElement = document.getElementById(inpuId);
      if (inputElement) {
        inputElement.focus();
      }
    }
    render() {
        return (
            <div className='Login'>
            <p>Login to access the full dashboard</p>
            <label htmlFor='email' onClick={() => this.onLabelClick('email')}>Email:</label>
            <input className='email' type='email' name='email' />
            <label htmlFor='password' onClick={() => this.onLabelClick('password')}>Password:</label>
            <input className='password' type='password' name='password' />
            <input className='ok' type='button' name='ok_button' value='OK' />
            </div>
        )
    }
}

export default Login