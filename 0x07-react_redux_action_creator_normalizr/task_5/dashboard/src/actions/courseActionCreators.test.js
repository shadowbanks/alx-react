import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe('Test courseActionCreators', () => {
    it('Verify that selectCourse returns correctly', () => {
        expect(selectCourse(1)).toEqual({ type: SELECT_COURSE, index: 1 });
    });
    
    it('Verify that unselectCourse returns correctly', () => {
        expect(unSelectCourse(1)).toEqual({ type: UNSELECT_COURSE, index: 1 });
    });
});