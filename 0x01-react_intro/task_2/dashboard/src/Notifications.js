import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

const Notifications = () => {
    return (
        <>
            <div style={{ position: 'relative' }} className='Notifications'>
                <button aria-label='Close'
                    onClick={ () => console.log('Close button has been clicked') }
                    style={{ position: 'absolute', top: '0', right: '0', padding: '.3rem',  border: 'none', background: 'none', }}
                >
                        <img src={closeIcon} alt='Close Icon' style={{ height: '1.3rem', width: '1.3rem'}} />
                </button>
                <p>Here is the list of notifications</p>
                <ul>
                    <li data-priority='default'>New course available</li>
                    <li data-priority='urgent'>New resume available</li>
                    <li data-priority='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
                </ul>
            </div>
            </>
    )
}

export default Notifications