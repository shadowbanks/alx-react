import React from "react";
import CourseListRow from "./CourseListRow";
import "./CourseList.css";
import propTypes from "prop-types";
import CourseShape from "./CourseShape";
import { StyleSheet, css } from "aphrodite";

const CourseList = ({ listCourses }) => {
    return(
        <table id="CourseList" className={css(style.courseList)}>
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

const style = StyleSheet.create({
    courseList: {
        width: "75%",
        border: "2px solid rgba(0, 0, 0, 0.2)",
        margin: "3rem auto 0",
        padding: "0",
    },
})

CourseList.propTypes = {
    listCourses: propTypes.arrayOf(CourseShape)
}

CourseList.defaultProps = {
    listCourses: []
}

export default CourseList