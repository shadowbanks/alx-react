import React from "react";
import { shallow } from 'enzyme';
import Notifications from "./Notifications";

describe('<Notifications />', () => {
    it('renders <Notificatios /> without crashing', () => {
        const notifications = shallow(<Notifications />);
        expect(notifications).toBeDefined();
    });

    it('verify that <Notifications /> renders three list items', () => {
        const notifications = shallow(<Notifications />);
        expect(notifications.find('ul NotificationItem')).toHaveLength(3);
    });

    it('verify that <Notifications /> renders the text ...', () => {
        const notifications = shallow(<Notifications />);
        const text = notifications.find('p').text();
        expect(text).toEqual('Here is the list of notifications');
    });

    it('verify that <NotificationItems /> returns the correct html', () => {
        const notifications = shallow(<Notifications />);
        const first_li = notifications.find('ul NotificationItem').first();
        expect(first_li.html()).toEqual('<li data-notification-type="default">New course available</li>');
    })
});