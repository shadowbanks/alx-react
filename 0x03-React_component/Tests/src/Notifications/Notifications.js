import closeIcon from '../assest/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import React, { Component } from 'react';
import propTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

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

    render() {
    return(
        <div className='NotificationWrapper'>
            <div className='menuItem'>
                Your Notifications
            </div>
            {this.props.displayDrawer? (
                <div style={{ position: 'relative' }} className='Notifications'>
                <button aria-label='Close' onClick={this.handleClick}
                    style={{ position: 'absolute', top: '0', right: '0', padding: '.3rem',  border: 'none', background: 'none', }}
                >
                        <img src={closeIcon} alt='Close Icon' style={{ height: '1.3rem', width: '1.3rem'}} />
                </button>
                
                <p>Here is the list of notifications</p>
                <ul>
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

Notifications.propTypes = {
    displayDrawer: propTypes.bool,
    listNotifications: propTypes.arrayOf(NotificationItemShape)
}

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
}

export default Notifications