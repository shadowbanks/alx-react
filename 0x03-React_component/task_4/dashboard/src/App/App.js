import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';


class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress = (e)  => {
    if(e.ctrlKey && e.key === 'h') {
      alert("Logging you out");
      this.props.logOut();
    }
  }
  componentDidMount(){
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount(){
    document.removeEventListener('keydown', this.handleKeyPress);
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
              <BodySectionWithMarginBottom title={'Course list'} >
                <CourseList listCourses={this.listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title={'Log in to continue'} >
                <Login />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title={'News from the School'} >
              <p>Ea deserunt eiusmod reprehenderit est.
                Eiusmod consequat qui adipisicing minim velit incididunt ea mollit.
                Laboris in eiusmod consectetur veniam Lorem dolore irure ullamco occaecat voluptate ut veniam tempor nisi.
                Aute in voluptate ullamco officia et veniam consectetur aliqua mollit ex deserunt ea.
                Commodo aliqua dolor veniam ad.
              </p>
            </BodySection>
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
