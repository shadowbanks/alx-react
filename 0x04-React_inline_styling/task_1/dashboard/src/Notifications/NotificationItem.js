import React, { PureComponent } from "react";
import propTypes from 'prop-types';

class NotificationItem extends PureComponent {
    render(){
        const { id, type, html, value, markAsRead } = this.props;
        if (this.props.type && value) {
            return(
                <li data-notification-type={type} onClick={markAsRead(id)}>
                    {value}
                </li>
            )
        }
        else {
            return(
                <li data-notification-type='urgent' dangerouslySetInnerHTML={{ __html: html.__html }} onClick={markAsRead(id)} ></li>
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
