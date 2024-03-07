import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

export const selectCourse = (index) => {
    return {
        type: SELECT_COURSE,
        index: index,
    };
};

export const boundSelectCourse = (index) => selectCourse(index);

export const unSelectCourse = (index) => {
    return {
        type: UNSELECT_COURSE,
        index: index,
    };
};

export const boundUnSelectCourse = (index) => unSelectCourse(index);
