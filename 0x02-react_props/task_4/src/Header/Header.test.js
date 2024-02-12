import { shallow } from "enzyme";
import React from "react";
import Header from "./Header";


describe('<Header />', () => {
    it('render <Header /> without crashing', () => {
        const header = shallow(<Header />);
        const h1 = header.find('h1');
        const img = header.find('img');
        expect(header.exists()).toBe(true);
        expect(img.exists()).toBe(true);
        expect(img.prop('src')).toBeDefined();
        expect(img.prop('alt')).toBeDefined();
        expect(h1.exists()).toBe(true);
        expect(h1.text()).toEqual('School dashboard');
    })
})
