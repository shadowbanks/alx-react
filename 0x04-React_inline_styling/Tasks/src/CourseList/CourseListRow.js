import React from "react";
import propTypes from 'prop-types';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell}) => {
    const bgdColor = {
        backgroudColor : isHeader ? '#deb5b545' : '#f5f5f5ab',
    }
    return(
        <tr style={{backgroundColor: bgdColor.backgroudColor}}>
            {(isHeader) ? (
                (textSecondCell) ? (
                    <>
                        <th>{textFirstCell}</th>
                        <th>{textSecondCell}</th>
                    </>
                ) : (
                    <>
                        <th colSpan={2}>{textFirstCell}</th>
                    </>
                )  
            ) : (
                <>
                    <td>{textFirstCell}</td>
                    <td>{textSecondCell}</td>
                </>
            ) }
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
