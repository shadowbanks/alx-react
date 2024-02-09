import React from "react"
import { getFooterCopy, getFullYear } from '../utils/utils';
import './Footer.css';

const Footer = () => {
    return(
        <div className='Footer'>
            <p>Copyright { getFullYear() } - { getFooterCopy() } </p>
        </div>
    )
}

export default Footer