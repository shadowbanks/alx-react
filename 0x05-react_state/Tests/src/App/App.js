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
import { StyleSheet, css } from 'aphrodite';
import {user, logOut, AppContext} from './AppContext';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: user,
      logOut: this.logOut,
      listNotifications : [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: {__html: getLatestNotification()} }
      ],
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  logIn = (email, password) => {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  };

  logOut = () => {
    this.setState({user: user});
  }

  handleKeyPress = (e)  => {
    if(e.ctrlKey && e.key === 'h') {
      alert("Logging you out");
      this.state.logOut();
    }
  };

  handleDisplayDrawer = (e) => {
    this.setState({displayDrawer: true})
  };

  handleHideDrawer = (e) => {
    this.setState({displayDrawer: false})
  };
  markNotificationAsRead = (id) => {
    this.setState(prevState => ({
      listNotifications: prevState.listNotifications.filter(item => item.id !== id)
    }));
  }
  componentDidMount(){
    document.addEventListener('keydown', this.handleKeyPress);
  };

  componentWillUnmount(){
    document.removeEventListener('keydown', this.handleKeyPress);
  };

  listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];

  

  render() {
    return (
      <>
      <AppContext.Provider value={{
        user: this.state.user,
        logOut: this.state.logOut,
      }}>
          <Notifications
            listNotifications={this.state.listNotifications}
            displayDrawer={this.state.displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
            markNotificationAsRead={this.markNotificationAsRead} />
          <div className={css(style.App)}>
            <Header />
            <div className={`App-body ${css(style.AppBody)}`}>
              {this.state.user.isLoggedIn? (
                <BodySectionWithMarginBottom title={'Course list'} >
                  <CourseList listCourses={this.listCourses} />
                </BodySectionWithMarginBottom>
              ) : (
                <BodySectionWithMarginBottom title={'Log in to continue'} >
                  <Login logIn={this.logIn} />
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
      </AppContext.Provider>
      </>
    );
  }
}

const style = StyleSheet.create({
  App: {
    display: "grid",
    margin: "0",
    padding: "0",
    position: "relative",
    minHeight: "100vh",
    gridTemplateRows: "25% 67% 8%",
  },
  AppBody: {
    '@media (max-width: 900px)': {
      paddingTop: "3rem",
    },
  }
})

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
