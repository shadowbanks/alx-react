import React from "react";
import propTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell}) => {
    const bgdColor = {
        backgroudColor : isHeader ? '#deb5b545' : '#f5f5f5ab',
    }
    return(
        <tr style={{backgroundColor: bgdColor.backgroudColor}}>
            {(isHeader) ? (
                (textSecondCell) ? (
                    <>
                        <th className={css(style.table_th)}>{textFirstCell}</th>
                        <th className={css(style.table_th)}>{textSecondCell}</th>
                    </>
                ) : (
                    <>
                        <th className={css(style.table_th, style.thead_th_colSpan)} colSpan={2}>{textFirstCell}</th>
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

const style = StyleSheet.create({
    table_th: {
        borderBottom: "2px solid rgba(0, 0, 0, 0.2)",
        textAlign: "left",
    },
    
    thead_th_colSpan: {
        textAlign: "center",
    }
})

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
