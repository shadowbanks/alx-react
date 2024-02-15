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
                    <CourseListRow textFirstCell={"No course available yet"} />
                ) : (
                    listCourses.map(({ id, name, credit }) => 
                        <CourseListRow key={id} textFirstCell={name} textSecondCell={credit} />
                    )
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