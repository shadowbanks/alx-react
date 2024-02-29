import React from "react";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import { mount } from "enzyme";
import { StyleSheetTestUtils } from 'aphrodite';


// Suppress style injection during testing
StyleSheetTestUtils.suppressStyleInjection();
describe('<BodySectionWithMarginBottom />', () => {
    it('Verify that <BodySectionWithMarginBottom /> and the component <BodySection /> render correctly', () => {
        const testBody = (
            <BodySectionWithMarginBottom title="test title">
                <p>test children node</p>
            </BodySectionWithMarginBottom>
            );
        const wrapper = mount(testBody);
        expect(wrapper.find('.bodySectionWithMargin').exists()).toBe(true);
        expect(wrapper.find('.bodySectionWithMargin .bodySection').exists()).toBe(true);
        expect(wrapper.find('.bodySectionWithMargin .bodySection h2').text()).toEqual('test title');

        wrapper.unmount()
    });
});