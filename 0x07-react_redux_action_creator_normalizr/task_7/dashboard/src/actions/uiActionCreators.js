import  { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
import fetch from 'node-fetch';

export const login = (email, password) => {
    return {
        type: LOGIN,
        user : { email, password },
    };
};

export const boundLogin = (email, password) => login(email, password);

export const logout = () => {
    return {type: LOGOUT}
};

export const boundLogout = () => logout();

export const displayNotificationDrawer = () => {
    return {type: DISPLAY_NOTIFICATION_DRAWER}
};

export const boundDisplayNotificationDrawer = () => displayNotificationDrawer;

export const hideNotificationDrawer = () => {
    return {type: HIDE_NOTIFICATION_DRAWER}
};

export const boundHideNotificationDrawer = () => hideNotificationDrawer();

export const loginSuccess = () => {
    return {type: LOGIN_SUCCESS};
};

export const loginFailure = () => {
    return {type: LOGIN_FAILURE};
}

export const loginRequest = (email, password) => {
    return (dispatch) => {
        boundLogin(email, password);

        return fetch('/login-success.json')
            .then((response) => response.json())
            .then(() => dispatch(loginSuccess()))
            .catch(() => dispatch(loginFailure()))
    };
};
