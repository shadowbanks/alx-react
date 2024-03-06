import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe("<CourseList /> ", () => {
    const listCourses = [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 }
    ];

    it("Renders CourseList component without crashing", () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.exists()).toBe(true);
    });

    it("Renders the 5 differnt rows", () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find('table thead CourseListRow')).toHaveLength(2);
    });

    
    it("Renders the 5 differnt rows", () => {
        const wrapper = shallow(<CourseList listCourses={listCourses} />);
        expect(wrapper.find('table tbody CourseListRow')).toHaveLength(3);
    });
});