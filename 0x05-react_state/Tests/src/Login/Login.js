import { Component } from 'react';
import React from "react";
import { StyleSheet, css } from 'aphrodite';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
                    isLoggedIn: false,
                    email: '',
                    password: '',
                    enableSubmit: false,
                  };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.onLabelClick = this.onLabelClick.bind(this);
  }
    onLabelClick = (inpuId) => {
      const inputElement = document.getElementById(inpuId);
      if (inputElement) {
        inputElement.focus();
      }
    };

    handleLoginSubmit = (e) => {
      this.setState({isLoggedIn: true});
    };

    handleChangeEmail = (e) => {
      e.target.value !== '' && this.state.password !== '' ?
      this.setState({enableSubmit: true}) :
      this.setState({enableSubmit: false});

      this.setState({email: e.target.value});
    };

    handleChangePassword = (e) => {
      this.state.email !== '' && e.target.value !== '' ?
      this.setState({enableSubmit: true}) :
      this.setState({enableSubmit: false});

      this.setState({password: e.target.value});
    };

    render() {
        return (
          <form onSubmit={this.handleLoginSubmit} className={css(style.Login)} >
            <label htmlFor='email' className={css(style.label)} onClick={() => this.onLabelClick('email')}>
              Email:
              <input id='email' type='email' name='email' className={css(style.input)} value={this.state.email} onChange={this.handleChangeEmail} />
            </label>
            <label htmlFor='password' className={css(style.label)} onClick={() => this.onLabelClick('password')}>
              Password:
              <input id='password' type='password' name='password' className={css(style.input)} value={this.state.password} onChange={this.handleChangePassword} />
            </label>
            <input className={css(style.submit)} type='submit' name='submit_button' value='Submit' disabled={!this.state.enableSubmit} />
          </form>
        )
    }
}

{/* <div className={css(style.Login)}>
<p>Login to access the full dashboard</p>
<fieldset className={css(style.fieldset)}>
  <label htmlFor='email' className={css(style.label)} onClick={() => this.onLabelClick('email')}>Email:</label>
  <input className={css(style.input)} type='email' name='email' />
</fieldset>
<fieldset className={css(style.fieldset)}>
  <label htmlFor='password' className={css(style.label)} onClick={() => this.onLabelClick('password')}>Password:</label>
  <input className={css(style.input)} type='password' name='password' />
</fieldset>
<input className={css(style.submit)} type='button' name='submit_button' value='submit' />
</div> */}

const style = StyleSheet.create({
  Login: {
    fontSize: "1.2rem",
    '@media (max-width: 950px)': {
  }
  },

  label: {
    marginRight: ".7rem",
      '@media (max-width: 950px)': {
      display: 'block',
    },
  },

  input: {
      marginLeft: ".7rem",
      '@media (max-width: 950px)': {
        border: "0.05",
    },
  },

  submit: {
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