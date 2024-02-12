import React from "react";
import CourseListRow from "./CourseListRow";
import "./CourseList.css";
import propTypes from "prop-types";
import CourseShape from "./CourseShape";

const CourseList = ({ listCourses }) => {
    return(
        <table id="CourseList">
            <thead>
                <CourseListRow isHeader={true} textFirstCell={"Available courses"} />
                <CourseListRow isHeader={true} textFirstCell={"Course name"} textSecondCell={"Credit"} />
            </thead>
            <tbody>
                {(!listCourses.length) ? (
                    <CourseListRow isHeader={false} textFirstCell="No course available yet" />
                ) : (
                    listCourses.map(({ key_id, name, credit }) => {
                        <CourseList key={key_id} isHeader={false} textFirstCell={name} textSecondCell={credit} />
                    })
                )}
            </tbody>
        </table>
    )
}

CourseList.propTypes = {
    listCourses: propTypes.arrayOf(CourseShape)
}

CourseList.defaultProps = {
    listCourses: []
}

export default CourseList