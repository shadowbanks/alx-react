import React, { useContext } from "react"
import { getFooterCopy, getFullYear } from '../utils/utils';
import './Footer.css';
import { AppContext } from "../App/AppContext";

const Footer = () => {
    return(
        <AppContext.Consumer>
            {({ user }) => (
                <div className='Footer'>
                    <p>Copyright { getFullYear() } - { getFooterCopy() } </p>
                    {user.isLoggedIn &&
                        <p><a href="#">Contact us</a></p>
                    }
                </div>
            )}
        </AppContext.Consumer>
    );
};

export default Footer;