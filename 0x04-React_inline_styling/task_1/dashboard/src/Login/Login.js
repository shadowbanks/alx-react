import { Component } from 'react';
import React from "react";
import { StyleSheet, css } from 'aphrodite';

class Login extends Component {
    onLabelClick = (inpuId) => {
      const inputElement = document.getElementById(inpuId);
      if (inputElement) {
        inputElement.focus();
      }
    }
    render() {
        return (
            <div className={css(style.Login)}>
            <p>Login to access the full dashboard</p>
            <label htmlFor='email' className={css(style.marginRight)} onClick={() => this.onLabelClick('email')}>Email:</label>
            <input className={css(style.marginRight)} type='email' name='email' />
            <label htmlFor='password' className={css(style.marginRight)} onClick={() => this.onLabelClick('password')}>Password:</label>
            <input className={css(style.marginRight)} type='password' name='password' />
            <input className={css(style.marginRight, style.ok)} type='button' name='ok_button' value='OK' />
            </div>
        )
    }
}

const style = StyleSheet.create({
  Login: {
    padding: "4rem 3rem 0",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },

  marginRight: {
    marginRight: ".7rem",
  },

  ok: {
    background: "none",
    borderRadius: ".3rem",
    border: ".03rem solid",
  }

})

export default Login