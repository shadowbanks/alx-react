import { shallow } from "enzyme";
import React from "react";
import Footer from "./Footer";


describe('<Footer />', () => {
    it('render <Footer /> without crashing', () => {
        const footer = shallow(<Footer />);
        const p = footer.find('p');
        expect(footer.exists()).toBe(true);
        expect(p.exists()).toBe(true);
    })
})
