import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';


class App extends Component {
  constructor(props) {
    super(props);
  }

  listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ]

  listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: {__html: getLatestNotification()} }
  ]

  render() {
    return (
      <>
        <Notifications listNotifications={this.listNotifications} />
        <div className='App'>
          <Header />
          <div className='App-body'>
            {this.props.isLoggedIn? (
              <CourseList listCourses={this.listCourses} />
            ) : (
              <Login />
            )}
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

// Define propTypes to validate prop type
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
}

// Set default value
App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
}

export default App
