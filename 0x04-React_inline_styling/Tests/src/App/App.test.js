import React from 'react';
import  { shallow, mount } from 'enzyme';
import App from './App'
import { StyleSheetTestUtils } from 'aphrodite';


// Suppress style injection during testing
StyleSheetTestUtils.suppressStyleInjection();
describe('<App />', () => {
    it('renders <App /> without crashing', () => {
        const app = shallow(<App />);
        expect(app).toBeDefined();
    });
}); 

describe('<CourseList \>', () => {
    it('does not render <CourseList \> by default', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('CourseList').exists()).toBe(false)
    });
    it('renders <CourseList \> when isLoggedIn is true', () => {
        const wrapper = shallow(<App isLoggedIn={true}/>);
        expect(wrapper.find('CourseList').exists()).toBe(true)
    });
});

describe('Event listener on <App />' ,() => {
    it('Verify that alert function was called', () => {
        const spy = jest.spyOn(window, 'alert').mockImplementation(() => {});
        const logOutMock = jest.fn();
        const wrapper = mount(<App logOut={logOutMock} />);
        const event = new KeyboardEvent('keydown', {
            key: "h",
            ctrlKey: true,
        });
        document.dispatchEvent(event);
        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
        wrapper.unmount();
    });

    it('Verify that alert with the correct text Logging you out', () => {
        const spy = jest.spyOn(window, 'alert').mockImplementation(() => {});
        const wrapper = mount(<App />);
        const event = new KeyboardEvent('keydown', {
            key: "h",
            ctrlKey: true,
        });
        document.dispatchEvent(event);
        expect(spy).toHaveBeenCalledWith('Logging you out');
        spy.mockRestore();
        wrapper.unmount();
    });

    it('Verify that {logOut} function was called', () => {
        const spy = jest.spyOn(window, 'alert').mockImplementation(() => {});
        const logOutMock = jest.fn();
        const wrapper = mount(<App logOut={logOutMock} />);
        const event = new KeyboardEvent('keydown', {
            key: "h",
            ctrlKey: true,
        });
        document.dispatchEvent(event);
        expect(logOutMock).toHaveBeenCalled();
        spy.mockRestore();
        wrapper.unmount();
    });
})