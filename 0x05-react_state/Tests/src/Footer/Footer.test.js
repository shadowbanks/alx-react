import { shallow } from "enzyme";
import React from "react";
import Footer from "./Footer";
import { AppContext } from "../App/AppContext";
import  { mount } from 'enzyme';


describe('<Footer />', () => {
    it('render <Footer /> without crashing', () => {
        const footer = shallow(<Footer />);
        const p = footer.find('p');
        expect(footer.exists()).toBe(true);
        expect(p.exists()).toBe(false);
    });

    it('verify link is not displayed when user is logged out', () => {
        const wrapper = mount(
            <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
                <Footer />
            </AppContext.Provider>
        );
        expect(wrapper.find('a').exists()).toBe(false);
    });
    
    it('verify link is  displayed when user is logged in', () => {
        const wrapper = mount(
            <AppContext.Provider value={{ user: { isLoggedIn: true } }}>
                <Footer />
            </AppContext.Provider>
        );
        expect(wrapper.find('a').exists()).toBe(true);
    });
})
