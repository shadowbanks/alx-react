import React from "react";
import BodySection from "./BodySection";
import { shallow } from "enzyme";

describe('Section />', () => {
    it('Verify that <BodySection /> renders as expected', () => {
        const testBody = (
        <BodySection title="test title">
            <p>test children node</p>
        </BodySection>);
        const wrapper = shallow(testBody);

        expect(wrapper.find('.bodySection').exists()).toBe(true);
        expect(wrapper.find('.bodySection h2').text()).toEqual('test title');
    });
});