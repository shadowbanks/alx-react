import { mount } from "enzyme";
import React from "react";
import Header from "./Header";
import { AppContext } from '../App/AppContext';

describe('<Header />', () => {
    it('render <Header /> without crashing', () => {
        const wrapper = mount(
            <AppContext.Provider value={{ user: { isLoggedIn: false }, logOut: () => {} }}>
                <Header />
            </AppContext.Provider>
        );
        const h1 = wrapper.find('h1');
        const img = wrapper.find('img');
        const section = wrapper.find('section');
        expect(wrapper.exists()).toBe(true);
        expect(img.exists()).toBe(true);
        expect(img.prop('src')).toBeDefined();
        expect(img.prop('alt')).toBeDefined();
        expect(h1.exists()).toBe(true);
        expect(h1.text()).toEqual('School dashboard');
        expect(section.exists()).toBe(false);
        
        wrapper.unmount();
    });

    it('verify section renders if logged in', () => {
        const mockLogOut = jest.fn()
        const wrapper = mount(
            <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'example@example.com' }, logOut: mockLogOut }}>
                <Header />
            </AppContext.Provider>
        );
        const section = wrapper.find('section');
        expect(section.exists()).toBe(true);
        expect(section.text()).toContain('Welcome');
        expect(section.text()).toContain('example@example.com');
        wrapper.find('a').simulate('click');
        expect(mockLogOut).toHaveBeenCalled();

        wrapper.unmount();
    });
});
