import React from "react";
import propTypes from "prop-types";

const NotificationItemShape = ({ id, html, type, value }) => {}


NotificationItemShape.prototype = {
    id: propTypes.number.isRequired,
    html: propTypes.shape({__html: propTypes.string}),
    type: propTypes.string.isRequired,
    value: propTypes.string
}

export default NotificationItemShape;