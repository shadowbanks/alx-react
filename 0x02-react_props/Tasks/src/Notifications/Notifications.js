import closeIcon from '../assest/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import React from 'react';
import propTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

const Notifications = ({ displayDrawer, listNotifications }) => {
    const handleClick = () => {
        console.log('Close button has been clicked');
    }

    return(
        <div className='NotificationWrapper'>
            <div className='menuItem'>
                Your Notifications
            </div>
            {displayDrawer? (
                <div style={{ position: 'relative' }} className='Notifications'>
                <button aria-label='Close' onClick={handleClick}
                    style={{ position: 'absolute', top: '0', right: '0', padding: '.3rem',  border: 'none', background: 'none', }}
                >
                        <img src={closeIcon} alt='Close Icon' style={{ height: '1.3rem', width: '1.3rem'}} />
                </button>
                
                <p>Here is the list of notifications</p>
                <ul>
                    {(!listNotifications.length) ? (
                        <NotificationItem value={'No new notification for now'} />
                    ) : (
                        listNotifications.map(({ id, html, type, value }) => 
                            <NotificationItem key={id} type={type} html={html} value={value} />
                        )
                    )}
                </ul>
            </div>
            ): (<></>)}
        </div>
    )
}

Notifications.propTypes = {
    displayDrawer: propTypes.bool,
    listNotifications: propTypes.arrayOf(NotificationItemShape)
}

Notifications.defaultProps = {
    displayDrawer: true,
    listNotifications: []
}

export default Notifications