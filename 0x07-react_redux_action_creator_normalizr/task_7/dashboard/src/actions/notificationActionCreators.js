import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "./notificationActionTypes";

export const markAsAread = (index) => {
    return {
        type: MARK_AS_READ,
        index: index,
    };
};

export const boundMarkAsRead = (index) => markAsAread(index);

export const setNotificationFilter = (filter) => {
    return {
        type: SET_TYPE_FILTER,
        filter: filter,
    };
};

export const boundSetNotificationFilter = (filter) => setNotificationFilter(filter);
