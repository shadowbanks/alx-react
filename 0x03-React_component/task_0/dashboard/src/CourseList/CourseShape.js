import React from "react";
import PropTypes, { number } from "prop-types";

const CourseShape = ({ id, name, credit }) => {

}


CourseShape.prototype = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    credit: PropTypes.number.isRequired
}

export default CourseShape;