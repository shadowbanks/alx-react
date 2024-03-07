import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from "./uiActionCreators";

describe('Test ui Action Creator', () => {
    it('Verify login action return expected result', () => {
        expect(login('example@example.com', 'password')).toEqual({type: LOGIN, user: {email: 'example@example.com', password: 'password'}});
    });

    it('Verify logout action return expected result', () => {
        expect(logout()).toEqual({type: LOGOUT});
    });
    
    it('Verify displayNotificationDrawer action return expected result', () => {
        expect(displayNotificationDrawer()).toEqual({type: DISPLAY_NOTIFICATION_DRAWER});
    });
    
    it('Verify hideNotificationDrawer action return expected result', () => {
        expect(hideNotificationDrawer()).toEqual({type: HIDE_NOTIFICATION_DRAWER});
    });
});