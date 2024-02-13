import React from "react";
import { shallow } from 'enzyme';
import Notifications from "./Notifications";

describe('<Notifications />', () => {
    const listNotifications = [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", value: "New resume available" }
      ]
    it('renders <Notificatios /> without crashing', () => {
        const notifications = shallow(<Notifications />);
        expect(notifications).toBeDefined();
    });

    it('verify that <NotificationItems /> returns the correct html', () => {
        const notifications = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        const first_li = notifications.find('ul NotificationItem').first();
        expect(first_li.html()).toEqual('<li data-notification-type="default">New course available</li>');
    });

    it('verify that <Notifications /> renders three list items when list of notifications are passed', () => {
        const notifications = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        expect(notifications.find('ul NotificationItem')).toHaveLength(3);
    });
    
    it('verify that the div.Notifications is not being displayed when {displayDrawer} is false and listNotifications={listNotifications}', () => {
        const notifications = shallow(<Notifications displayDrawer={false} listNotifications={listNotifications} />);
        expect(notifications.find('.Notifications').exists()).toBe(false);
    });
    
    it('verify that the div.Notifications is not being displayed when {displayDrawer}=false and {listNotifications}=[]', () => {
        const notifications = shallow(<Notifications displayDrawer={false} listNotifications={[]} />);
        expect(notifications.find('.Notifications').exists()).toBe(false);
    });

})


describe('<Notifications /> with displayDrawer = {false}', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Notifications displayDrawer={false} />);
    })

    it('verify that the menuItem is being displayed when {displayDrawer} is false', () => {
        expect(wrapper.find('.menuItem').exists()).toBe(true);
    });

    it('verify that the div.Notifications is not being displayed when {displayDrawer} is false', () => {
        expect(wrapper.find('.Notifications').exists()).toBe(false);
    });
});

describe('<Notifications /> with displayDrawer = {true}', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Notifications displayDrawer={true} />);
    })

    it('verify that <Notifications /> renders the text ...', () => {
        const text = wrapper.find('p').text();
        expect(text).toEqual('Here is the list of notifications');
    });

    it('verify that the menu item is being displayed when {displayDrawer} is true', () => {
        expect(wrapper.find('.menuItem').exists()).toBe(true);
    });
    
    it('verify that the div.Notifications is not being displayed when {displayDrawer} is true', () => {
        expect(wrapper.find('.Notifications').exists()).toBe(true);
    });

    it('verify that Notifications renders correctly if {listNotifications} prop not passed', () => {
        expect(wrapper.exists()).toBe(true);
    });
})

describe('<Notification /> with {displayDrawer}=true and {listNotifications}=[]', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    });

    it('verify that Notifications renders correctly if {listNotifications} prop not passed', () => {
        expect(wrapper.exists()).toBe(true);
    });
    
    it('verify that <NotificationItems /> returns the correct html', () => {
        expect(wrapper.exists()).toBe(true);
    });
    
    it('verify that <NotificationItems /> returns the correct html', () => {
        const first_li = wrapper.find('ul NotificationItem').first();
        expect(first_li.html()).toEqual('<li data-notification-type="default">No new notification for now</li>');
    });
});