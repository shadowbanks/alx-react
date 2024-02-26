import React, { PureComponent } from "react";
import propTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";

class NotificationItem extends PureComponent {
    render(){
        const { id, type, html, value, markAsRead } = this.props;
        
        const style = StyleSheet.create({
            li: {
                color: type === 'default' ? "blue" : "red"
            },
        });
        
        if (this.props.type && value) {
            return(
                <li data-notification-type={type} className={css(style.li)} onClick={markAsRead(id)}>
                    {value}
                </li>
            )
        }
        else {
            return(
                <li data-notification-type='urgent'className={css(style.li)}  dangerouslySetInnerHTML={{ __html: html.__html }} onClick={markAsRead(id)} ></li>
            )
        }
    }
}


NotificationItem.propTypes = {
    html: propTypes.shape({
        __html: propTypes.string,
    }),

    type: propTypes.string.isRequired,

    value: propTypes.string,

    markAsRead: propTypes.func
}

NotificationItem.defaultProps = {
    type: 'default',
    markAsRead: () => {}
}


export default NotificationItem;
