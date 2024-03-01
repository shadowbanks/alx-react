import React, { PureComponent } from "react";
import propTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";

class NotificationItem extends PureComponent {
    render(){
        const { id, type, html, value, markAsRead } = this.props;
        
        const style = StyleSheet.create({
            li: {
                color: type === 'default' ? "blue" : "red",
            '@media (max-width: 900px)': {
                padding: "10px 8px",
                borderBottom: "0.15rem solid black",
            },
        },
        });
        
        if (this.props.type && value) {
            return(
                <li data-notification-type={type} className={css(style.li)} onClick={this(id)}>.props
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

    markNotificationAsRead: propTypes.func
}

NotificationItem.defaultProps = {
    type: 'default',
    markNotificationAsRead: () => {}
}


export default NotificationItem;
