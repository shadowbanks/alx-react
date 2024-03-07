import { shallow } from "enzyme";
import React from "react";
import Login from "./Login";


describe('<Login />', () => {
    it('verify form renders', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('form').exists()).toBe(true);
    });

    it('renders labels for inputs email and password', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('label[htmlFor="email"]').exists()).toBe(true);
        expect(wrapper.find('label[htmlFor="password"]').exists()).toBe(true);
    });

    it('renders input field for email and password', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input[type="email"]').exists()).toBe(true);
        expect(wrapper.find('input[type="password"]').exists()).toBe(true);
        expect(wrapper.find('input[type="submit"]').exists()).toBe(true);
    });
});

describe('verify Submit button behaviour in <Login /> ', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Login />);
    });
    afterEach(() => {
        wrapper.unmount();
    })
    it('verify that submit is disabled by default', () => {
        // Check if submit button is disabled by default
        expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
    });

    it('verify that submit is disabled when either email or password is empty', () => {

        //Check that submit is disabled if just email is filled
        wrapper.find('input[type="email"]').simulate('change', {target: {value: 'me@me.com'}});
        expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
        wrapper.find('input[type="email"]').simulate('change', {target: {value: ''}});

        //Check that submit is enabled when inputs are filled
        wrapper.find('input[type="password"]').simulate('change', {target: {value: 'password'}});
        expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);

    });

    it('verify that submit is enabled when both email and password are filled', () => {
        wrapper.find('input[type="email"]').simulate('change', {target: {value: 'me@me.com'}});
        wrapper.find('input[type="password"]').simulate('change', {target: {value: 'password'}});
        expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
    });
});
