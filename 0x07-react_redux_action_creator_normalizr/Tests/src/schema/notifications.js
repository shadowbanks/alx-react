import notificationData from '../../../notifications.json';
import { normalize, schema } from 'normalizr'

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
    return notificationData.filter((notification) => notification.author.id === userId).map((notification) => notification.context);
};

export default getAllNotificationsByUser;
