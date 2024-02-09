import './App.css';
import '../utils/utils'
import Notify from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import React from 'react';
import ReactDOM from 'react-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <Notify />
      <div className='App'>
        <Header />
        <div className='App-body'>
          <Login />
        </div>
        <div className='App-footer'>
          <Footer />
        </div>
      </div>
  </>
)

