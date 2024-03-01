import React from 'react';
import  { shallow, mount } from 'enzyme';
import App from './App'
import { StyleSheetTestUtils } from 'aphrodite';
import { user, logOut} from './AppContext';


// Suppress style injection during testing
StyleSheetTestUtils.suppressStyleInjection();

describe('<App />', () => {
    it('renders <App /> without crashing', () => {
        const app = shallow(<App />);
        expect(app).toBeDefined();
    });
}); 

describe('<CourseList \>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<App />)
    });
    afterEach(() => {
        wrapper.unmount()
    });
    it('does not render <CourseList \> by default', () => {
        expect(wrapper.find('CourseList').exists()).toBe(false)
    });
    it('renders <CourseList \> when isLoggedIn is true', () => {
        wrapper.setState({user: {isLoggedIn: true} })
        expect(wrapper.find('CourseList').exists()).toBe(true)
    });
});

describe('Event listener on <App />' ,() => {
    it('Verify that alert function was called', () => {
        const spy = jest.spyOn(window, 'alert').mockImplementation(() => {});
        const logOutMock = jest.fn();
        const wrapper = mount(<App />);
        wrapper.setState({logOut: logOutMock})
        const event = new KeyboardEvent('keydown', {
            key: "h",
            ctrlKey: true,
        });
        document.dispatchEvent(event);
        expect(logOutMock).toHaveBeenCalled();
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
        const wrapper = mount(<App />);
        wrapper.setState({logOut: logOutMock})
        const event = new KeyboardEvent('keydown', {
            key: "h",
            ctrlKey: true,
        });
        document.dispatchEvent(event);
        expect(logOutMock).toHaveBeenCalled();
        spy.mockRestore();
        wrapper.unmount();
    });
});

//Test state
describe('<App /> with state', () => {
    it('verifies default state of displayDrawer is false', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.state('displayDrawer')).toBe(false);
    });
    
    it('verifies state is updated to true after calling handleDisplayDrawer', () => {
        const wrapper = shallow(<App />);
        wrapper.instance().handleDisplayDrawer();
        expect(wrapper.state('displayDrawer')).toBe(true);
    });
    
    it('verifies state is updated to false after calling handleHideDrawer', () => {
        const wrapper = shallow(<App />);
        wrapper.setState({ displayDrawer: true });
        wrapper.instance().handleHideDrawer();
        expect(wrapper.state('displayDrawer')).toBe(false);
    });

});

describe('verify login and logout functionality', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<App />);
        wrapper.instance().logIn('example@example.com', 'password');
    });
    afterEach(() => {
        wrapper.unmount();
    });
    it('verify login function updates correctly', () => {
        expect(wrapper.state('user')).toEqual({
            email: 'example@example.com',
            password: 'password',
            isLoggedIn: true,
        });
    });

    it('verify logout function updates correctly', () => {
        wrapper.instance().logOut();
        expect(wrapper.state('user')).toEqual(user);
    });
});
