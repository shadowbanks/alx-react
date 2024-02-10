import './App.css';
import Notify from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import React from 'react';


const App = () => {
  return (
      <>
        <Notify />
        <div className='App'>
          <Header />
          <div className='App-body'>
            <Login />
          </div>
          <Footer />
        </div>
      </>
    );
}

export default App