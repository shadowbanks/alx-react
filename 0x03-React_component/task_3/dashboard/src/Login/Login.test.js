import { shallow } from "enzyme";
import React from "react";
import Login from "./Login";


describe('<Login />', () => {
    it('renders labels for inputs email and pass', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('label[htmlFor="email"]').exists()).toBe(true);
        expect(wrapper.find('label[htmlFor="password"]').exists()).toBe(true);
    }),
    
    it('renders input field for email and password', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input[type="email"]').exists()).toBe(true);
        expect(wrapper.find('input[type="password"]').exists()).toBe(true);
        expect(wrapper.find('input[type="button"]').exists()).toBe(true);
    })
})
