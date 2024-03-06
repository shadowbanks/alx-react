import * as notifications from '../../../notifications.json';

const getAllNotificationsByUser = (userId) => {
    return notifications.filter((notification) => notification.id === userId).map((notification) => notification.context);
};

console.log(getAllNotificationsByUser('5debd764a7c57c7839d722e9'));

export default getAllNotificationsByUser;
