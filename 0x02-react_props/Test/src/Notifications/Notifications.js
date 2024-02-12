import closeIcon from '../assest/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import React from 'react';
import propTypes from 'prop-types';

const Notifications = ({ displayDrawer }) => {
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
                    <NotificationItem type={'default'} value={'New course available'} />
                    <NotificationItem type={'urgent'} value={'New resume available'} />
                    <NotificationItem type={'urgent'} html={{__html:getLatestNotification()}} />
                </ul>
            </div>
            ): (<></>)}
        </div>
    )
}

Notifications.propTypes = {
    displayDrawer: propTypes.bool
}

Notifications.defaultProps = {
    displayDrawer: false
}

export default Notifications