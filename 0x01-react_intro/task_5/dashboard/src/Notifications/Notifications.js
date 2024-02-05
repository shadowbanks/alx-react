import React from "react";
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from "../utils/utils";

function Notifications() {
    const handleClick = () => {
        console.log('Close button has been clicked');
    }
    return (
        <>
            <div style={{ position: 'relative' }} className="Notifications">
                <button aria-label="Close" onClick={handleClick}
                    style={{ position: 'absolute', top: '5', right: '5', border: 'none', background: 'none' }}
                >
                    <img src={closeIcon} alt="Close button" style={{ height: '1.3rem', width: '1.3rem'}} />
                </button>
                <p>Here is the list of notifications</p>
                <ul>
                    <li data-priority='default'>New course available</li>
                    <li data-priority='urgent'>New resume available</li>
                    <li data-priority='urgent' dangerouslySetInnerHTML={{__html: getLatestNotification() }}></li>
                </ul>
            </div>
        </>
    )
}

export default Notifications