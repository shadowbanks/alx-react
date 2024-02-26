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
              <fieldset className={css(style.fieldset)}>
                <label htmlFor='email' className={css(style.label)} onClick={() => this.onLabelClick('email')}>Email:</label>
                <input className={css(style.input)} type='email' name='email' />
              </fieldset>
              <fieldset className={css(style.fieldset)}>
                <label htmlFor='password' className={css(style.label)} onClick={() => this.onLabelClick('password')}>Password:</label>
                <input className={css(style.input)} type='password' name='password' />
              </fieldset>
              <input className={css(style.ok)} type='button' name='ok_button' value='OK' />
            </div>
        )
    }
}

const style = StyleSheet.create({
  Login: {
    fontSize: "1.2rem",
    '@media (max-width: 950px)': {
  }
  },

  label: {
    '@media (max-width: 950px)': {
      display: 'inline',
      marginRight: ".7rem",
    },
  },

  input: {
    '@media (max-width: 950px)': {
      border: "0.05",
    },
  },
  fieldset: {
    border: "none",
    padding: "0",
    '@media (max-width: 950px)': {
      display: "block",
    },
  },

  ok: {
    background: "none",
    borderRadius: ".3rem",
    border: ".03rem solid",
    '@media (max-width: 950px)': {
      borderRadius: "0",
      border: "0.1rem solid orange",
    },
  }

})

export default Login