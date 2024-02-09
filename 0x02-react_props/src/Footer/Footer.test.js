import React from 'react';
import  { shallow } from 'enzyme';
import App from './App'

describe('<App />', () => {
    it('renders <App /> without crashing', () => {
        const app = shallow(<App />);
        expect(app).toBeDefined();
    });

    it('<App /> renders a div with class App-header', () => {
        const div_header = shallow(<div className='App-header'></div>);
        expect(div_header).toBeDefined();
    });

    it('<App /> renders a div with class App-body', () => {
        const div_body = shallow(<div className='App-body'></div>);
        expect(div_body).toBeDefined();
    });

    it('<App /> renders a div with class App-footer', () => {
        const div_footer = shallow(<div className='App-footer'></div>);
        expect(div_footer).toBeDefined();
    });
});