import React, { PureComponent } from "react";
import propTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";

class NotificationItem extends PureComponent {
    handleClick = () => {
        const {id, markAsRead } = this.props;
        markAsRead(id);
    }
    render(){
        const { id, type, html, value } = this.props;
        
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
                <li data-notification-type={type} className={css(style.li)} onClick={this.handleClick}>
                    {value}
                </li>
            )
        }
        else {
            return(
                <li data-notification-type='urgent'className={css(style.li)}  dangerouslySetInnerHTML={{ __html: html.__html }} onClick={this.handleClick}></li>
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
