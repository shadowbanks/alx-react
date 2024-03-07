import { SET_TYPE_FILTER, MARK_AS_READ } from "./notificationActionTypes";
import { markAsAread, setNotificationFilter } from "./notificationActionCreators";

describe('Test the notification action creators', () => {
    it('Verify markAsRead returns expected output', () => {
        expect(markAsAread(1)).toEqual({type: MARK_AS_READ, index: 1});
    });
    
    it('Verify setNotificationFilter returns expected output', () => {
        expect(setNotificationFilter('DEFAULT')).toEqual({type: SET_TYPE_FILTER, filter: 'DEFAULT'});
    });
});