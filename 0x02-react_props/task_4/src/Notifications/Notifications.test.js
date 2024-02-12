import React from "react";
import { shallow } from 'enzyme';
import Notifications from "./Notifications";

describe('<Notifications />', () => {
    it('renders <Notificatios /> without crashing', () => {
        const notifications = shallow(<Notifications />);
        expect(notifications).toBeDefined();
    });

    it('verify that <Notifications /> renders three list items', () => {
        const notifications = shallow(<Notifications displayDrawer={true} />);
        expect(notifications.find('ul NotificationItem')).toHaveLength(3);
    });

    it('verify that <Notifications /> renders the text ...', () => {
        const notifications = shallow(<Notifications displayDrawer={true} />);
        const text = notifications.find('p').text();
        expect(text).toEqual('Here is the list of notifications');
    });

    it('verify that <NotificationItems /> returns the correct html', () => {
        const notifications = shallow(<Notifications displayDrawer={true} />);
        const first_li = notifications.find('ul NotificationItem').first();
        expect(first_li.html()).toEqual('<li data-notification-type="default">New course available</li>');
    });

    it('verify that the menuItem is being displayed when {displayDrawer} is false', () => {
        const notifItems = shallow(<Notifications displayDrawer={false} />);
        expect(notifItems.find('.menuItem').exists()).toBe(true);
    });

    it('verify that the div.Notifications is not being displayed when {displayDrawer} is false', () => {
        const notifItems = shallow(<Notifications displayDrawer={false} />);
        expect(notifItems.find('.Notifications').exists()).toBe(false);
    });

    it('verify that the menu item is being displayed when {displayDrawer} is true', () => {
        const notifItems = shallow(<Notifications displayDrawer={true} />);
        expect(notifItems.find('.menuItem').exists()).toBe(true);
    });
    
    it('verify that the div.Notifications is not being displayed when {displayDrawer} is true', () => {
        const notifItems = shallow(<Notifications displayDrawer={true} />);
        expect(notifItems.find('.Notifications').exists()).toBe(true);
    });
});