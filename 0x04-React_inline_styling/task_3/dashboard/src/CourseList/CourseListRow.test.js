import CourseListRow from "./CourseListRow";
import React from "react";
import { shallow } from "enzyme";

describe('<CourseListRow /> isHeader prop is true', () => {
    it('Test when textSecondCell is null', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell={"FirstCell"} />);
        const thElement = wrapper.find('th');
        expect(thElement.prop('colSpan')).toEqual(2);
        expect(thElement.text()).toEqual('FirstCell');
    });
    it('Test when textSecondCell is not null', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell={"FirstCell"} textSecondCell={"SecondCell"} />);
        const firstTh = wrapper.find('th').at(0);
        const secondTh = wrapper.find('th').at(1);
        expect(firstTh.text()).toEqual('FirstCell');
        expect(secondTh.text()).toEqual('SecondCell');
    });
});

describe('<CourseListRow /> isHeader prop is false', () => {
    it('Test when textSecondCell is null', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="First Cell" />);
        const firstTh = wrapper.find('td').at(0);
        const secondTh = wrapper.find('td').at(1);
        expect(firstTh.text()).toEqual('First Cell');
        expect(secondTh.text()).toEqual("");
    });
    it('Test when textSecondCell is not null', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell={"First Cell"} textSecondCell={"Second Cell"} />);
        const tr = wrapper.find('tr');
        const firstTh = tr.find('td').at(0);
        const secondTh = tr.find('td').at(1);
        expect(firstTh.text()).toEqual('First Cell');
        expect(secondTh.text()).toEqual('Second Cell');
    });
});