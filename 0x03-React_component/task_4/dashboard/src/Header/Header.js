import React from "react"
import logo from '../assest/holberton-logo.jpg';
import './Header.css';

const Header = () => {
    return(
        <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h1>School dashboard</h1>
        </header>
    )
}

export default Header;