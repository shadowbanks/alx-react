import './App.css';
import Notify from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import React from 'react';
import PropTypes from 'prop-types'
import CourseList from '../CourseList/CourseList';


const App = ({ isLoggedIn }) => {
  let toDisplay;
  if (isLoggedIn) {
    toDisplay = <CourseList />;
  } else {
    toDisplay = <Login />;
  }
  return (
      <>
        <Notify />
        <div className='App'>
          <Header />
          <div className='App-body'>
            {toDisplay}
          </div>
          <Footer />
        </div>
      </>
    );
}

// Define propTypes to validate prop type
App.propTypes = {
  isLoggedIn: PropTypes.bool
}

// Set default value
App.defaultProps = {
  isLoggedIn: false
}

export default App
