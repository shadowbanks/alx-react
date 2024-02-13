import React from "react";
import { shallow } from 'enzyme';
import NotificationItem from "./NotificationItem";

describe('<NotificationItem />', () => {
    it('renders <NotificatioItem /> without crashing', () => {
        const notificationItem = shallow(<NotificationItem value={'Hello'} />);
        expect(notificationItem.exists()).toBeTruthy();
    });

    it('verify that <NotificationItem /> renders when passed type and value props', () => {
        const notificationItem = shallow(<NotificationItem type={'default'} value={'test'} />);
        const text = notificationItem.find('li').text()
        expect(text).toEqual('test');
    });

    it('verify that <NotificationItem /> renders when passed html', () => {
        const htmlProp = {__html: '<u>test</u>'};
        const notificationItem = shallow(<NotificationItem html={htmlProp} />);
        expect(notificationItem.prop('dangerouslySetInnerHTML')).toEqual(htmlProp);
    })
});