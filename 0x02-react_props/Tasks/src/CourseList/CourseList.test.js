import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe("<CourseList /> ", () => {
    it("Renders CourseList component without crashing", () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.exists()).toBe(true);
    });
    it("Renders the 5 differnt rows", () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find('table thead CourseListRow')).toHaveLength(2);
        expect(wrapper.find('table tbody CourseListRow')).toHaveLength(3);
    });
});