import React from 'react';
import WithLogging from './WithLogging';
import { mount, shallow } from 'enzyme';

const TestHtml = () => <h1>Hello</h1>;
describe('Test <WithLogging />', () => {

    it('Verify console.log is called on mount and unmount', () => {
        const spy = jest.spyOn(console, 'log').mockImplementation();
        const TestFunc = WithLogging(TestHtml);
        const wrapper = mount(<TestFunc />);

        expect(spy).toBeCalledTimes(1);
        expect(spy).toHaveBeenCalledWith('Component TestHtml is mounted');
        wrapper.unmount()
        expect(spy).toBeCalledTimes(2);
        expect(spy).toHaveBeenCalledWith('Component TestHtml is going to unmount');
        spy.mockRestore()
    });
});