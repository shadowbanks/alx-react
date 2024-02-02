import logo from './holberton-logo.jpg';
import './App.css';
import './utils'
import { Component } from 'react';
import { getFooterCopy, getFullYear } from './utils';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1>School dashboard</h1>
        </header>
        <div className='App-body'>
          <p>Login to access the full dashboard</p>
        </div>
        <div className='App-footer'>
          <p>Copyright { getFullYear() } - { getFooterCopy() } </p>
        </div>
      </div>
    );
  }
}

export default App;
