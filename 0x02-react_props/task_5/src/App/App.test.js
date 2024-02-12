import React from 'react';
import  { shallow } from 'enzyme';
import App from './App'

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