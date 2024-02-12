import React from "react";
import propTypes from 'prop-types';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell}) => {
    let tableElem;
    if (isHeader) {
        if (textSecondCell) {
            tableElem = 
                <>
                <th>{textFirstCell}</th>
                <th>{textSecondCell}</th>
                </>
        } else {
            tableElem = <th colSpan={2}>{textFirstCell}</th>
        }
    } else {
        tableElem = 
        <>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
        </>
    }
    return(
        <tr>
            {tableElem}
        </tr>
    )
}

// Default values
CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
}

// Validate prop type
CourseListRow.propTypes = {
    isHeader: propTypes.bool,
    textFirstCell: propTypes.string.isRequired,
    textSecondCell: propTypes.oneOfType([propTypes.string, propTypes.number])
}

export default CourseListRow
