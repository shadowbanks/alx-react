import React, { useState } from "react";
import propTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell}) => {
    const [checked, setChecked] = useState(false);

    const handleCheck = () => {
        setChecked(!checked);
    }
    return(
        <tr className={isHeader ? css(style.theadBgColor) :
            checked ? css(style.rowChecked) :
                css(style.tbodyBgColor)}
        >
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
                    <td><input type="checkbox" checked={checked} onChange={handleCheck} ></input>{textFirstCell}</td>
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
    },

    rowChecked: {
        backgroundColor: "#e6e4e4",
    },

    theadBgColor: {
        backgroundColor: "#deb5b545",
    },

    tbodyBgColor: {
        backgroundColor: "#f5f5f5ab",
    },
});

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
