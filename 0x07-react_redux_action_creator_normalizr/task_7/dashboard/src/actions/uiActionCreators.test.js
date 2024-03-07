import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";
import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginSuccess, loginRequest, loginFailure } from "./uiActionCreators";
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

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

describe('Test loginRequset action', () => {
    beforeEach(() => {
    });

    afterEach(() => {
        fetchMock.restore();
    });

    it('verify right response from API when LOGIN_SUCCESS is dispatched', () => {
        const expectedAction = [loginSuccess()];
        const store = mockStore({});

        fetchMock.getOnce('/login-success.json', { data: 'test data'});

        return store.dispatch(loginRequest('example@example.com', 'password'))
            .then(() => expect(store.getActions()).toEqual(expectedAction));
    });

    it('verify right response from API when LOGIN_FAILURE is dispatched', () => {
        const expectedAction = [loginFailure()];
        const store = mockStore({});

        fetchMock.getOnce('/login-success.json', { throws: new Error('Failed to fetch') });

        return store.dispatch(loginRequest('example@example.com', 'password'))
            .then(() => expect(store.getActions()).toEqual(expectedAction));
    });
});