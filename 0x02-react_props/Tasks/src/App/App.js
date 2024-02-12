import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import React from 'react';
import PropTypes from 'prop-types'
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';


const App = ({ isLoggedIn }) => {
  let toDisplay;
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ]

  const listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: {__html: getLatestNotification()} }
  ]
  if (isLoggedIn) {
    toDisplay = <CourseList listCourses={listCourses} />;
  } else {
    toDisplay = <Login />;
  }
  return (
      <>
        <Notifications listNotifications={listNotifications} />
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
