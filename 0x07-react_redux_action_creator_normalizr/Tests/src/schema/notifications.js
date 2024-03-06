import notificationData from '../../../notifications.json';
import { normalize, schema } from 'normalizr';

// Define users schema
const user = new schema.Entity("users");

// Define messages schema
const message = new schema.Entity("messages", {}, {
    idAttribute: 'guid',
});

// Define notifications schema
const notification = new schema.Entity("notifications", {
    author: user,
    context: message,
});

export const normalizedData = normalize(notificationData, [notification]);

const getAllNotificationsByUser = (userId) => {
    const notifications = normalizedData.entities.notifications;
    const messages =  normalizedData.entities.messages;
    let result = [];

    for (let notificationId in notifications){
        if (notifications[notificationId].author === userId){
            result.push(messages[notifications[notificationId].context]);
        }
    }

    return result;
};

export default getAllNotificationsByUser;
