import closeIcon from '../assest/close-icon.png';
import { getLatestNotification } from '../utils/utils';
// import './Notifications.css';
import NotificationItem from './NotificationItem';
import React, { Component } from 'react';
import propTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from "aphrodite";

class Notifications extends Component {
    constructor(props) {
        super(props)
    }
    handleClick = () => {
        console.log('Close button has been clicked');
    }

    markAsRead = (id) => {
        console.log(`Notification ${id} has been marked as read`)
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.listNotifications.length > this.props.listNotifications.length;
    }
    
    render() {
    return(
        <div className={`NotificationWrapper ${this.props.displayDrawer? css(style.NotificationWrapperShow) : css(style.NotificationWrapperHidden)}`}>
            <div className={`menuItem ${this.props.displayDrawer? css(style.menuItem, style.hideDisplay) : css(style.menuItem)}`}>
                Your Notifications
            </div>
            {this.props.displayDrawer? (
                <div className={`Notifications ${css(style.Notifications)}`}>
                <button aria-label='Close' onClick={this.handleClick} className={css(style.button)}>
                        <img src={closeIcon} alt='Close Icon' style={{ height: '1.3rem', width: '1.3rem'}} />
                </button>
                
                <p className={css(style.p)}>Here is the list of notifications</p>
                <ul className={css(style.ul)}>
                    {(!this.props.listNotifications.length) ? (
                        <NotificationItem value={'No new notification for now'} markAsRead={this.markAsRead} />
                    ) : (
                        this.props.listNotifications.map(({ id, html, type, value }) => 
                            <NotificationItem key={id} id={id} type={type} html={html} value={value} markAsRead={this.markAsRead} />
                        )
                    )}
                </ul>
            </div>
            ): (<></>)}
        </div>
    )}
}

const style = StyleSheet.create({
    NotificationWrapperHidden: {
        position: "absolute",
        padding: "0.7rem 1rem 0 0",
        right: "0",
        zIndex: "1",
    },

    NotificationWrapperShow: {
        position: "absolute",
        padding: "0.7rem 1rem 0 0",
        right: "0",
        zIndex: "1",
        '@media (max-width: 900px)': {
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            padding: "0",
        },
    },
    
    Notifications: {
        border: ".2rem dashed rgb(224, 53, 75)",
        padding: ".3rem",
        position: "relative",
        '@media (max-width: 900px)': {
            border: "none",
        },
    },
    
    hideDisplay: {
        '@media (max-width: 900px)': {
            display: "none",
        },
    },
    menuItem :{
        textAlign: "right",
        paddingBottom: "0.2rem",
    },

    button: {
        position: 'absolute',
        top: '0',
        right: '0',
        padding: '.3rem',
        border: 'none',
        background: 'none',
    },

    ul: {
        fontWeight: 'bold',
        fontSize: '1rem',
        '@media (max-width: 900px)': {
            listStyle: "none",
            fontSize: "20px",
            paddingLeft: "0",
        },
    },

    p: {
        fontWeight: 'bold',
        fontSize: '1rem',
        '@media (max-width: 900px)': {
            fontSize: '1.4rem',
        },
    },
})

Notifications.propTypes = {
    displayDrawer: propTypes.bool,
    listNotifications: propTypes.arrayOf(NotificationItemShape)
}

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
}

export default Notifications